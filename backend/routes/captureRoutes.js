const express = require('express');
const router = express.Router();

// Simulate criminal's hiding location
const cities = [
  'Yapkashnagar',
  'Lihaspur',
  'Narmis City',
  'Shekharvati',
  'Nuravgram'
];

// Determine capture success
router.post('/capture', (req, res) => {
  const { cop1, cop2, cop3 } = req.body;

  // Simulate capture based on cop choices and criminal's hiding location
  const capturedBy = simulateCapture(cop1, cop2, cop3);

  res.json({ capturedBy });
});

// Simulate capture
function simulateCapture(cop1, cop2, cop3) {
  const criminalLocation = cities[Math.floor(Math.random() * cities.length)];

  if (cop1.city === criminalLocation) return cop1.name;
  if (cop2.city === criminalLocation) return cop2.name;
  if (cop3.city === criminalLocation) return cop3.name;

  return 'Not captured';
}

module.exports = router;
