// src/api/stockApi.ts
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllStocks = async () => {
  const res = await fetch(`${BASE_URL}/stocks`);
  if (!res.ok) throw new Error("Failed to fetch stocks");
  return res.json();
};

export const searchStocks = async (query: string) => {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
};

export const getStockDetails = async (symbol: string) => {
  const res = await fetch(`${BASE_URL}/stocks/${symbol}`);
  if (!res.ok) throw new Error("Failed to fetch stock details");
  return res.json();
};
