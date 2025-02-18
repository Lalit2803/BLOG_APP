Blog App (Node.js, Express, MongoDB)
A secure and user-friendly blogging platform built with Node.js, Express, and MongoDB, featuring JWT-based authentication with HTTP-only cookies. Users can sign up, log in, create, edit, and delete their own blogs, while others can only read them.

✨ Features
✅ User Authentication – Secure login/signup with JWT tokens stored in HTTP-only cookies.
✅ Create & Manage Blogs – Users can write, edit, and delete their own blogs.
✅ Read-Only Access – Other users can view blogs but cannot modify them.
✅ Secure Sessions – Tokens stored in HTTP-only cookies for enhanced security.
✅ Middleware for Security & Logging – Implements authentication, request tracking, and error handling.
✅ MongoDB Integration – Blogs and users are stored in a NoSQL database.
✅ RESTful API – Follows best practices for API design.

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Authentication: JWT (JSON Web Tokens) stored in HTTP-only cookies & Bcrypt for password hashing
Middleware: Express Middleware for logging, authentication, and request tracking
