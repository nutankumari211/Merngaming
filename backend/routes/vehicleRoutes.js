const express = require('express');
const router = express.Router();

// Vehicle data
const vehicles = [
  { type: 'EV Bike', range: 60, count: 2, cities: ['Yapkashnagar', 'Lihaspur', 'Nuravgram'], imageUrl:"https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { type: 'EV Car', range: 100, count: 1, cities: ['Yapkashnagar', 'Lihaspur', 'Narmis City'] , imageUrl:"https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { type: 'EV SUV', range: 120, count: 1, cities: ['Yapkashnagar', 'Narmis City', 'Shekharvati'] , imageUrl:"https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

// Get vehicles by city name
router.get('/vehicles/:cityName', (req, res) => {
  const cityName = req.params.cityName;
  const cityVehicles = vehicles.filter(vehicle => vehicle.cities.includes(cityName));
  res.json(cityVehicles);
});

module.exports = router;
