import React, { useState, useEffect } from 'react';
import RealTimeChart from './components/RealTimeChart';
import { connectWebSocket } from './utils/websocket';

const App: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    connectWebSocket((newData) => {
      if (newData.value) {
        setData((prevData) => [...prevData.slice(-49), newData.value]);
        setIsLoading(false);
      }
    });

    return () => {
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Data Visualization</h1>
      {isLoading ? (
        <div className="loading">Loading data...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <RealTimeChart data={data} />
      )}
    </div>
  );
};

export default App;
