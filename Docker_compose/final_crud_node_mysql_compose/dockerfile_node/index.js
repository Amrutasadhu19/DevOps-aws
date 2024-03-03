// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create Express application
const app = express();

// Configure body-parser middleware
app.use(bodyParser.json({ limit: '8mb' }));

// Set environment variables
const PORT = process.env.PORT || 4000;
// const HOST = process.env.HOST || 'localhost';
const USER = process.env.MYSQL_USER || 'root';
const HOST = process.env.MYSQL_HOST;
const PASSWORD = process.env.MYSQL_PASSWORD || 'root';
const DATABASE = process.env.MYSQL_DATABASE || 'cruddatabase';

// Create MySQL connection
const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'db',
	user: USER,
	password: PASSWORD,
	database: DATABASE
});

// Connect to MySQL database
connection.connect((err) => {
	if (err) {
		console.error('Error connecting to MySQL: ', err);
	} else {
		console.log('Connected to MySQL database');
		// Start the Express server once connected
		app.listen(PORT, () => {
			console.log(`Server is running on http://${PORT}`);
		});
	}
});

// Define routes

// Home route
app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Hello world'
	});
});

// Add student route
app.post('/add-student', (req, res) => {
	const student = req.body;
	const query = 'INSERT INTO students (rollNo, name) VALUES (?, ?)';

	connection.query(query, [student.rollNo, student.name], (err, results) => {
		if (err) {
			console.error('Error adding student: ', err);
			res.json({
				success: false,
				message: 'Error occurred while adding student'
			});
		} else {
			console.log('Student added successfully');
			res.json({
				success: true,
				message: 'Student added successfully'
			});
		}
	});
});

// Get all students route
app.get('/students', (req, res) => {
	const query = 'SELECT * FROM students';

	connection.query(query, (err, results) => {
		if (err) {
			console.error('Error fetching students: ', err);
			res.json({
				success: false,
				message: 'Error occurred while fetching students'
			});
		} else {
			res.json({
				success: true,
				students: results
			});
		}
	});
});