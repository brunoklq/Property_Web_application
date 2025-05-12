import pool from "../../../lib/db";  


export default async function handler(req, res) {
  if (req.method === "POST") {
    const {firstName, lastName, email, password, role } = req.body;  // get from the request body
 

// Hash the password before storing


// Insert new user into the database
await pool.query(
  'INSERT INTO userlogin (firstName, lastName, email, password, role) VALUES (?, ?, ?, ?, ?)',
  [firstName,lastName, email, password, role]
);
  
    //A simple alert that the addition was successful
    res.status(200).json({ message: "User added" });
  } 
  else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}