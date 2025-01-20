import React, { useState, useEffect } from 'react';
import RealTimeChart from './components/RealTimeChart';

const App: React.FC = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData, Math.random() * 100]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-Time Data Visual:</h1>
      <RealTimeChart data={data} />
    </div>
  );
};

export default App;
