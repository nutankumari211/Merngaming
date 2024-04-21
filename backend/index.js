const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api', require('./routes/cityRoutes'));
app.use('/api', require('./routes/vehicleRoutes'));
app.use('/api', require('./routes/captureRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
