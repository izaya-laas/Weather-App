const key = import.meta.env.VITE_API_KEY;
const api = `https://api.weatherapi.com/v1/forecast.json?key=${key}&lang=es&days=6&`;

export default api;
