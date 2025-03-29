import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

export const SearchBar = () => {
  const [city, setCity] = useState('');
  const { searchWeather, loading, isDarkMode } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      searchWeather(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 mx-4">
      <div className="relative">
        <svg
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for cities..."
          className={`w-full pl-12 pr-4 py-3 bg-${isDarkMode ? 'weather-card-light' : 'weather-card-light'} rounded-xl 
            text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}
            placeholder:text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}
            border border-${isDarkMode ? 'weather-dark/10' : 'gray-200'}
            focus:outline-none focus:ring-2 focus:ring-weather-accent focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={loading}
        />
      </div>
    </form>
  );
}; 