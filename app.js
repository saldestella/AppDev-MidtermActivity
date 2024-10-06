const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/user');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});