import pool from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM userlogin WHERE email = ? AND password = ?",
      [email, password] // plaintext password – only for demo!
    );

    if (rows.length === 1) {
      // Simulate login by setting a cookie
      res.setHeader('Set-Cookie', `username=${email}; password=${password}; Path=/; HttpOnly`);
      return res.status(200).json({ message: "Login successful" });
    } 
    else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}
