const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

async function requestAuth(path, body) {
  const response = await fetch(`${API_URL}/api/auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}

export function signUp(credentials) {
  return requestAuth("signup", credentials);
}

export function logIn(credentials) {
  return requestAuth("login", credentials);
}
