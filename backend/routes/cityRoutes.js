const express = require('express');
const router = express.Router();

// City data
const cities = [
  { name: 'Yapkashnagar', distance: 60, description: 'Glowing alleys and rooftop races, powered by solar energy.', image: "https://media.istockphoto.com/id/1434196050/photo/3d-render-of-cyber-punk-night-city-landscape-concept-light-glowing-on-dark-scene-night-life.webp?b=1&s=170667a&w=0&k=20&c=C-PI8sEvpfMKwjfyabsuocqt_IkgyFlXt-eQ0m0bNog="
},
  { name: 'Lihaspur', distance: 50, description: 'Ancient temples shrouded in fog, whispers of forgotten tech.',  image: "https://media.istockphoto.com/id/1434196050/photo/3d-render-of-cyber-punk-night-city-landscape-concept-light-glowing-on-dark-scene-night-life.webp?b=1&s=170667a&w=0&k=20&c=C-PI8sEvpfMKwjfyabsuocqt_IkgyFlXt-eQ0m0bNog="
 },
  { name: 'Narmis City', distance: 40, description: 'Towering skyscrapers and hidden underground networks.',  image: "https://media.istockphoto.com/id/1434196050/photo/3d-render-of-cyber-punk-night-city-landscape-concept-light-glowing-on-dark-scene-night-life.webp?b=1&s=170667a&w=0&k=20&c=C-PI8sEvpfMKwjfyabsuocqt_IkgyFlXt-eQ0m0bNog=" },
  { name: 'Shekharvati', distance: 30, description: 'Rolling hills and forgotten mining tunnels.',  image: "https://media.istockphoto.com/id/1434196050/photo/3d-render-of-cyber-punk-night-city-landscape-concept-light-glowing-on-dark-scene-night-life.webp?b=1&s=170667a&w=0&k=20&c=C-PI8sEvpfMKwjfyabsuocqt_IkgyFlXt-eQ0m0bNog=" },
  { name: 'Nuravgram', distance: 20, description: 'Talking robots and malfunctioning AI guardians.',  image: "https://media.istockphoto.com/id/1434196050/photo/3d-render-of-cyber-punk-night-city-landscape-concept-light-glowing-on-dark-scene-night-life.webp?b=1&s=170667a&w=0&k=20&c=C-PI8sEvpfMKwjfyabsuocqt_IkgyFlXt-eQ0m0bNog=" }
];

// Get all cities
router.get('/cities', (req, res) => {
  res.json(cities);
});

module.exports = router;
