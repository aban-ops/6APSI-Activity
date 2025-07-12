import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer App">
      <header className="App-header">
        <p>Timer: {count} seconds</p>
      </header>
    </div>
  );
}

export default Timer;