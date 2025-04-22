import { useEffect, useState } from "react";
import { getAllStocks } from "../api/stockApi";

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getAllStocks().then(setStocks).catch(console.error);
  }, []);

  return (
    <div>
      {stocks.map((stock) => (
        <div key={stock.symbol}>{stock.name}</div>
      ))}
    </div>
  );
};

export default StockList;
