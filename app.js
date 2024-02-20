const express = require('express');
const app = express();

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Route to show the login form
app.get('/login', (req, res) => {
    res.send('<form action="/login" method="post"><input type="text" name="username" placeholder="Enter your username"><button type="submit">Login</button></form>');
});

// Route to handle form submission
app.post('/login', (req, res) => {
    const username = req.body.username;

    // Store username in browser's local storage
    res.send(`<script>window.localStorage.setItem('username', '${username}'); window.location.href = '/';</script>`);
});

// Route to show the send message form
app.get('/', (req, res) => {
    // Retrieve username from local storage
    const username = `<script>document.write(localStorage.getItem('username'))</script>`;

    res.send(`<h1>Welcome, ${username}!</h1><form action="/send-message" method="post"><input type="text" name="message" placeholder="Enter your message"><button type="submit">Send</button></form>`);
});

// Route to handle sending messages
app.post('/send-message', (req, res) => {
    const message = req.body.message;

    // Handle sending message logic here

    res.send(`Message sent: ${message}`);
});

app.listen(3000);



