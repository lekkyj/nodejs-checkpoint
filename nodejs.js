
1. Print "HELLO WORLD" to Console
File: hello-world.js

js
Copy
Edit
console.log("HELLO WORLD");
To run:

bash
Copy
Edit
node hello-world.js
2. Create a Basic HTTP Server
File: server.js

js
Copy
Edit
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
To run:

bash
Copy
Edit
node server.js
3. File System Operations
File: file-operations.js

js
Copy
Edit
const fs = require('fs');

// Create a file named welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and log the contents of hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
4. Password Generator
File: password-generator.js

Steps:

Run:

bash
Copy
Edit
npm install generate-password
Code:

js
Copy
Edit
const generatePassword = require('generate-password');

function createPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true
  });
  console.log('Generated Password:', password);
}

createPassword();
5. Send Email Using Nodemailer
File: email-sender.js

Steps:

Run:

bash
Copy
Edit
npm install nodemailer
Code (use your real credentials carefully and securely):

js
Copy
Edit
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password'   // replace with your password or app password
  }
});

let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent using Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
