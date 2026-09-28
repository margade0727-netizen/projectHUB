require("dotenv").config();

const cors = require("cors");
const express = require("express");
const connectDatabase = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  methods: ["POST"],
}));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong. Please try again." });
});

connectDatabase()
  .then(() => app.listen(port, () => console.log(`Mongra API listening on port ${port}`)))
  .catch((error) => {
    console.error("Unable to start API:", error.message);
    process.exit(1);
  });
