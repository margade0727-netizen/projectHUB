const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function createToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is required. Add it to server/.env before starting the API.");
  }

  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

function validateCredentials(email, password) {
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    return { error: "Enter a valid email address." };
  }

  if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH || password.length > 128) {
    return { error: "Password must be between 8 and 128 characters." };
  }

  return { normalizedEmail };
}

async function signUp(req, res, next) {
  try {
    const { email, password, isAdult, acceptedTerms } = req.body;
    const credentials = validateCredentials(email, password);

    if (credentials.error) {
      return res.status(400).json({ message: credentials.error });
    }

    if (isAdult !== true || acceptedTerms !== true) {
      return res.status(400).json({ message: "You must confirm that you are 18+ and accept the Terms and Privacy Policy." });
    }

    const existingUser = await User.findOne({ email: credentials.normalizedEmail });

    if (existingUser) {
      return res.status(409).json({ message: "An account with that email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      email: credentials.normalizedEmail,
      passwordHash,
      acceptedTermsAt: new Date(),
    });

    return res.status(201).json({
      token: createToken(user),
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    return next(error);
  }
}

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const credentials = validateCredentials(email, password);

    if (credentials.error) {
      return res.status(400).json({ message: "Enter a valid email and password." });
    }

    const user = await User.findOne({ email: credentials.normalizedEmail }).select("+passwordHash");
    const passwordMatches = user ? await bcrypt.compare(password, user.passwordHash) : false;

    if (!passwordMatches) {
      return res.status(401).json({ message: "Email or password is incorrect." });
    }

    return res.status(200).json({
      token: createToken(user),
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = { signUp, logIn };
