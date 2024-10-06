# Node.js Backend Midterm Project

This is a basic backend application built with Node.js and Express.js. The application handles user registration, login, and profile management. It uses mock models (in-memory or JSON) and includes middleware for authentication, logging, and rate-limiting.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Project Structure
project/
├── app.js                    # Main app file
├── routes/                   # Route handlers
│   └── user.js
├── controllers/              # Business logic for each route
│   └── userController.js
├── models/                   # Mock models (JSON or in-memory)
│   └── userModel.js
├── middleware/               # Custom middleware for auth, logging
│   └── authMiddleware.js
└── data/                     # (Optional) JSON data storage
    └── users.json

## Installation

To set up the project locally, follow these steps:

### Prerequisites
Make sure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend-exercise
