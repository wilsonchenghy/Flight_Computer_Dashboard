// App.jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [euler, setEuler] = useState({ roll: 0, pitch: 0, yaw: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://192.168.2.194/euler") // Replace with ESP32 IP
        .then((res) => res.json())
        .then((data) => setEuler(data))
        .catch((err) => console.error(err));
    }, 200); // 5Hz

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h2>Euler Angles from ESP32</h2>
      <p>Roll: {euler.roll.toFixed(2)}°</p>
      <p>Pitch: {euler.pitch.toFixed(2)}°</p>
      <p>Yaw: {euler.yaw.toFixed(2)}°</p>
    </div>
  );
}

export default App;
