import React, { useEffect, useState } from 'react';
import { getAllStocks } from '../api/stockApi';

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const data = await getAllStocks();
        setStocks(data);
      } catch (err) {
        setError('Failed to fetch stocks.');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) return <p>Loading stocks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock: any) => (
          <li key={stock.symbol}>
            {stock.symbol} - {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
