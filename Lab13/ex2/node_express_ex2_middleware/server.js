const express = require('express');
const app = express();

// Global middleware (application-level)
app.use((req, res, next) => {
    console.log(`[GLOBAL] ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Another global middleware
app.use((req, res, next) => {
    console.log("[GLOBAL] Second middleware executed");
    next();
});

// Route-level middleware
const routeMiddleware = (req, res, next) => {
    console.log("[ROUTE] Route-specific middleware executed");
    next();
};

// Routes
app.get('/', (req, res) => {
    res.send("Home Route");
});

app.get('/about', routeMiddleware, (req, res) => {
    res.send("About Route with Route Middleware");
});

app.get('/user/:id', (req, res, next) => {
    console.log("[ROUTE] Preprocessing user request");
    next();
}, (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
