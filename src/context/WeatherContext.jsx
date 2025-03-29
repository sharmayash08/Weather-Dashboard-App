import { createContext, useContext, useState, useEffect } from 'react';
import { weatherService } from '../services/weatherService';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Save recent searches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const searchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await weatherService.getWeather(city);
      setWeather(data);
      
      // Update recent searches
      setRecentSearches(prev => {
        const newSearches = [city, ...prev.filter(s => s !== city)].slice(0, 5);
        return newSearches;
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const refreshWeather = () => {
    if (weather?.city) {
      searchWeather(weather.city);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        error,
        recentSearches,
        isDarkMode,
        searchWeather,
        toggleTheme,
        refreshWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}; 