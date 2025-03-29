import { useEffect, useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { weatherService } from '../services/weatherService';

export const ForecastCard = () => {
  const { weather, isDarkMode } = useWeather();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      if (!weather?.city) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await weatherService.getForecast(weather.city);
        setForecast(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [weather?.city]);

  if (!weather) return null;

  if (loading) {
    return (
      <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-6`}>
        <h2 className={`text-xl font-semibold mb-4 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
          5-Day Forecast
        </h2>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-weather-accent"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-6`}>
        <h2 className={`text-xl font-semibold mb-4 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
          5-Day Forecast
        </h2>
        <p className={`text-red-${isDarkMode ? '400' : '500'} text-center`}>{error}</p>
      </div>
    );
  }

  return (
    <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-6`}>
      <h2 className={`text-xl font-semibold mb-4 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
        5-Day Forecast
      </h2>
      <div className="space-y-4">
        {forecast.map((day) => (
          <div
            key={day.date.toISOString()}
            className={`flex items-center justify-between p-3 bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl`}
          >
            <div className="flex items-center gap-3">
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                alt={day.description}
                className="w-10 h-10"
              />
              <div>
                <p className={`text-sm font-medium text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
                  {day.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
                <p className={`text-xs capitalize text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>
                  {day.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-lg font-semibold text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
                {day.temperature}°C
              </p>
              <p className={`text-xs text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>
                {day.windSpeed} km/h
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 