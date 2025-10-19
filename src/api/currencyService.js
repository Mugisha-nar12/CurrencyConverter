const API_KEY = process.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = 'https://api.freecurrencyapi.com/v1';

export const fetchLatestRates = async (baseCurrency = 'USD') => {
  try {
    const response = await fetch(`${BASE_URL}/latest?apikey=${API_KEY}&base_currency=${baseCurrency}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch latest rates:", error);
    throw error;
  }
};

export const fetchCurrencySymbols = async () => {
  try {
    const response = await fetch(`${BASE_URL}/currencies?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch currency symbols:", error);
    throw error;
  }
};