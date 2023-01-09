require('dotenv').config({ path: './utils/config.env' });
const fileError = require('./utils/fileError');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./utils/db');

const BookRoutes = require('./routes/bookRoutes');

// database connection
db();

app.use(express.json());

// all route
app.use('/api/book', BookRoutes);

// connection for the server
server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// for handling error
process.on('unhandledRejection', (err) => {
  fileError(err);
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
