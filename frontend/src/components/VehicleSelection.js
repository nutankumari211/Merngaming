// VehicleSelection.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VehicleSelection.css'; // Import the CSS file

const VehicleSelection = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // Fetch vehicle data for the selected city
    fetch(`https://merngaming.vercel.app/api/vehicles/${cityName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        return response.json();
      })
      .then(data => {
        setVehicles(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [cityName]);

  const handleVehicleSelection = (vehicleType) => {
    // Implement your logic for selecting the vehicle here
    console.log(`Selected vehicle: ${vehicleType}`);
    setSelectedVehicle(vehicleType);
    // Redirect to the Result page

    navigate(`/result?captureStatus=success&capturingCop=Cop1`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error fetching vehicles: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Select Vehicle for Cop in {cityName}</h2>
      {vehicles.length === 0 ? (
        <div>No vehicles available for this city</div>
      ) : (
        <div className="card-container">
          {vehicles.map(vehicle => (
            <div key={vehicle.type} className="card" onClick={() => handleVehicleSelection(vehicle.type)}>
              <img src={vehicle.imageUrl} alt={vehicle.type} className="vehicle-image" />
              <div className="vehicle-details">
                <h3>{vehicle.type}</h3>
                <p>Range: {vehicle.range} KM</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehicleSelection;
