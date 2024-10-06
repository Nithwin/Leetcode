const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));


const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
});

// Register a new user
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch user from the database based on email
    // Compare hashed password with provided password
    // Generate a JWT and send it back
    // ...

    res.status(200).json({ token: 'your-jwt-token' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected route: Fetch user details
app.get('/api/user', (req, res) => {
  try {
    // Verify JWT from the request
    // Fetch user data based on the decoded token
    // ...

    res.status(200).json({ user: 'user-details' });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
