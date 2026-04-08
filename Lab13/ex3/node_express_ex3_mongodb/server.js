const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/users');

// middleware
app.use(express.json());

// DB connection
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("MongoDB CRUD API running");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
