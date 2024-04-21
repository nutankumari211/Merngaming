// CitySelection.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CitySelection.css';

const CitySelection = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cities data from backend
    fetch('http://localhost:5000/api/cities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        return response.json();
      })
      .then(data => setCities(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error fetching cities: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Select City for Each Cop</h2>
      <ul>
        {cities.map(city => (
          <li key={city.name}>
            <div className="city-card">
              <img src={city.image} alt={city.name} />
              <h3>{city.name}</h3>
              <p>{city.description}</p>
              <Link to={`/vehicle-selection/${encodeURIComponent(city.name)}`}>
                Select City
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelection;
