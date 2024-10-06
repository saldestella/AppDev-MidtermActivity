# Node.js Backend Midterm Project

This is a basic backend application built with Node.js and Express.js. The application handles user registration, login, and profile management. It uses mock models (in-memory or JSON) and includes middleware for authentication, logging, and rate-limiting.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Project Structure

project/<br>
├── app.js                    # Main app file <br>
├── routes/                   # Route handlers<br>
│   └── user.js<br>
├── controllers/              # Business logic for each route<br>
│   └── userController.js<br>
├── models/                   # Mock models (JSON or in-memory)<br>
│   └── userModel.js<br>
├── middleware/               # Custom middleware for auth, logging<br>
│   └── authMiddleware.js<br>
└── data/                     # (Optional) JSON data storage<br>
    └── users.json

## Installation

To set up the project locally, follow these steps:

### Prerequisites
Make sure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/saldestella/AppDev-MidtermActivity
    Tip: Use github desktop

2. Install Dependencies:
    ```bash
    npm install

3.  JSON Web Tokens (JWT) for authentication [optional]
    ```bash
    npm install jsonwebtoken

4. Joi, for validation [optional]
    ```bash
    npm install joi

## Running the Application
Once the dependencies are installed, follow these steps to run the application:

1. Start the server:
    ```bash
    node app.js

## API Endpoints

1. Registration User: `POST /user/register`
    ```bash
    {
    "username": "testuser",
    "password": "password123",
    "email": "testuser@example.com"
    }

    Response:
    ```bash
    {
    "message": "User registered successfully"
    }


2. Login: `POST /user/login`
    ```bash
    {
    "username": "testuser",
    "password": "password123"
    }
    
    Response:
    ```bash
    {
    "message": "Login successful",
    "token": "mock-token"
    }


3. Get User Profile: `GET /user/profile`
    ```bash
    Authorization: mock-token

    Response:
    ```bash
    {
    "id": 1,
    "username": "testuser",
    "email": "testuser@example.com"
    }



