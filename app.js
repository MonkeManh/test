const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Define a route for /home
app.get('/home', (req, res) => {
  res.send('Hello from the vps!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
