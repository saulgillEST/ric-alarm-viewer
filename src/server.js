/**
 * RIC Alarm Viewer server.
 *
 * A minimal Express application that serves a small dashboard and a REST API
 * for browsing alarms reported by RAN nodes. Static assets live in ../public
 * and the alarm API is mounted under /api/alarms.
 */
const path = require('path');
const express = require('express');
const alarmsRouter = require('./routes/alarms');

const app = express();

// Parse JSON request bodies.
app.use(express.json());

// Serve the dashboard and other static assets from the public directory.
app.use(express.static(path.join(__dirname, '..', 'public')));

// Mount the alarm REST API.
app.use('/api/alarms', alarmsRouter);

// Simple liveness check.
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RIC Alarm Viewer listening on http://localhost:${PORT}`);
});

module.exports = app;
