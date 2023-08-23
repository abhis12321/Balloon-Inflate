import React, { useState } from 'react';
const Balloon = () => {
  const [inflated, setInflated] = useState(false);

  const inflateBalloon = () => {
    setInflated(true);
  };

  return (
    <div className='bal'>
      <h1>Balloon Animation</h1>
      <div className="ball">
        <button onClick={inflateBalloon}>Inflate Balloon</button>
        <div className={`balloon ${inflated ? 'inflate' : ''}`}></div>
      </div>
    </div>
  );
};

export default Balloon;