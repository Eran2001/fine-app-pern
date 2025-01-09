const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const secretKey = process.env.SECRET_KEY;

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Routes
// Register a new user
app.post("/api/register", async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    licenseID,
    phone_number,
    password,
    confirmPassword,
  } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  licenseID = licenseID.trim();
  phone_number = phone_number.trim();
  password = password.trim();
  confirmPassword = confirmPassword.trim();

  if (
    !firstName ||
    !lastName ||
    !email ||
    !licenseID ||
    !phone_number ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (password.length < 8) {
    return res
      .status(400)
      .json({
        error: "Password must be at least 8 characters long",
        message: "Password must be at least 8 characters long",
      });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const checkLicense = "SELECT * FROM users WHERE license_id = $1";
    const licenseResult = await pool.query(checkLicense, [licenseID]);

    if (licenseResult.rows.length > 0) {
      return res.status(400).json({
        error: "License ID already exists",
        message: "The provided license ID is already registered."
      })
    }
    const query = `
      INSERT INTO users (first_name, last_name, email, license_id, password, phone_number )
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
    const values = [
      firstName,
      lastName,
      email,
      licenseID,
      password,
      phone_number,
    ];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting user data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login a user
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user || user.password !== password) {
      alert("Invalid email or password");
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
    alert("Error logging in");
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard" });
});

// Admin Login
app.post("/api/adminLogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM admin_table WHERE email = $1",
      [email]
    );
    const admin = result.rows[0];
    if (!admin || admin.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: admin.id, role: "admin" }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in as admin" });
  }
});

const authenticateAdminToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/api/admin-dashboard", authenticateAdminToken, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

//admin-dashboard
//fines
app.get("/api/fines", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM fines");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//officer
// Create a new officer
app.post("/api/officers", async (req, res) => {
  const { batch_number, name, email, password, contact } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO officers (batch_number, name, email, password, contact) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [batch_number, name, email, password, contact]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
    k;
  }
});

// Read all officers
app.get("/api/officers", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM officers ORDER BY officer_id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an officer
app.put("/api/officers/:id", async (req, res) => {
  const { id } = req.params;
  const { batch_number, name, email, password, contact } = req.body;
  try {
    const result = await pool.query(
      "UPDATE officers SET batch_number = $1, name = $2, email = $3, password = $4, contact = $5 WHERE officer_id = $6 RETURNING *",
      [batch_number, name, email, password, contact, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an officer
app.delete("/api/officers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM officers WHERE officer_id = $1", [id]);
    res.json({ message: "Officer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//post-office
// Create a new post office
app.post("/api/postoffices", async (req, res) => {
  const { postal_code, post_office_name, email, password, district } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO postoffices (postal_code, post_office_name, email, password, district) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [postal_code, post_office_name, email, password, district]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all post offices
app.get("/api/postoffices", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM postoffices ORDER BY post_id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a post office
// app.put("/api/postoffices/:id", async (req, res) => {
//   const { id } = req.params;
//   const { postal_code, post_office_name, email, password, district } = req.body;
//   try {
//     const result = await pool.query(
//       "UPDATE postoffices SET postal_code = $1, post_office_name = $2, email = $3, password = $4, district = $5 WHERE post_id = $6 RETURNING *",
//       [postal_code, post_office_name, district, id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.put("/api/postoffices/:id", async (req, res) => {
  const { id } = req.params;
  const { postal_code, post_office_name, email, password, district } = req.body;
  try {
    const result = await pool.query(
      "UPDATE postoffices SET postal_code = $1, post_office_name = $2, email = $3, password = $4, district = $5 WHERE post_id = $6 RETURNING *",
      [postal_code, post_office_name, email, password, district, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Partially update a post office
app.patch("/postoffices/:id", async (req, res) => {
  const { id } = req.params;
  const fields = Object.keys(req.body);
  const values = Object.values(req.body);

  if (fields.length === 0) {
    return res.status(400).json({ error: "No fields provided for update" });
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");

  try {
    const result = await pool.query(
      `UPDATE postoffices SET ${setClause} WHERE post_id = $${
        fields.length + 1
      } RETURNING *`,
      [...values, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post office not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a post office
app.delete("/api/postoffices/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM postoffices WHERE post_id = $1", [id]);
    res.json({ message: "Post office deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//user-dashboard
// Add a new issue
app.post("/api/issues", async (req, res) => {
  const { issue_name, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO issues (issue_name, description) VALUES ($1, $2) RETURNING *",
      [issue_name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all issues
app.get("/api/issues", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM issues ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//officers
// officers login
app.post("/api/officers/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query database for officer by email
    const result = await pool.query("SELECT * FROM officers WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const officer = result.rows[0];

    // Check plain-text password
    if (officer.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { officer_id: officer.officer_id, email: officer.email },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token, name: officer.name, officer_id: officer.officer_id });
  } catch (error) {
    console.error("Error during officer login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// post office
// post office login
app.post("/api/post-office-login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM postoffices WHERE email = $1 AND password = $2",
      [email, password]
    );
    const postOffice = result.rows[0];
    if (!postOffice) {
      return res
        .status(400)
        .json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: postOffice.id }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

//officer's fine
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Post fine
app.post("/api/fines", async (req, res) => {
  const { fine_name, fine_type, fine_amount, license_id, user_email } =
    req.body;

  try {
    const result = await pool.query(
      "INSERT INTO officernewfines (fine_name, fine_type, fine_amount, license_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [fine_name, fine_type, fine_amount, license_id]
    );

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: "New Fine Issued",
      text: `Dear user,

A new fine has been issued to you with the following details:

- Name: ${fine_name}
- Type: ${fine_type}
- Amount: Rs.${fine_amount}
- License ID: ${license_id}

Please address this fine at your earliest convenience.

visit our website - https://fine-app-react.vercel.app/

Regards,
Fine.lk`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Fine added successfully and email sent.",
      fine: result.rows[0],
    });
  } catch (err) {
    console.error("Error during INSERT or email sending:", err);
    res.status(500).json({ error: err.message, details: err });
  }
});

//get officer's fine
app.get("/api/officerfines", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM officernewfines");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error during SELECT from officerfines:", err);
    res.status(500).json({ error: err.message, details: err });
  }
});

// delete fines
app.delete("/api/officerfines/:fine_id", async (req, res) => {
  const { fine_id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM officernewfines WHERE fine_id = $1",
      [fine_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Fine not found" });
    }

    res.status(200).json({ message: "Fine successfully deleted" });
  } catch (error) {
    console.error("Error deleting fine:", error);
    res.status(500).json({ message: "Error deleting fine" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS, // Replace with your email password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your recipient email
    subject: `Message from ${fullName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
