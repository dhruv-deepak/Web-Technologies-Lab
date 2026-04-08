const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

// middleware
app.use(express.json());

// routes
app.use('/users', userRoutes);

// home route
app.get('/', (req, res) => {
    res.send('Express REST API is running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
