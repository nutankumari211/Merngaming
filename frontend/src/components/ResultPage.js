import React, { useState, useEffect } from 'react';
import './ResultPage.css';

const ResultPage = () => {
  const [capturedBy, setCapturedBy] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate capture result
    fetch('https://merngaming.vercel.app/api/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cop1: { name: 'Cop 1', city: 'Yapkashnagar' }, 
        cop2: { name: 'Cop 2', city: 'Lihaspur' },
        cop3: { name: 'Cop 3', city: 'Narmis City' }
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to capture fugitive');
        }
        return response.json();
      })
      .then(data => setCapturedBy(data.capturedBy))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error capturing fugitive: {error}</div>;
  }

  return (
    <div className='container'>
      <h2>Result</h2>
      {capturedBy ? (
        <p>Fugitive captured by: {capturedBy}</p>
      ) : (
        <p>Fugitive not captured</p>
      )}
    </div>
  );
}

export default ResultPage;
