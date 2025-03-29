import { useWeather } from '../context/WeatherContext';

export const WeatherCard = () => {
  const { weather, loading, error, refreshWeather, isDarkMode } = useWeather();

  console.log(isDarkMode);
  if (loading) {
    return (
      <div className={`flex justify-center items-center min-h-[400px] bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-weather-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-8`}>
        <p className={`text-red-${isDarkMode ? '400' : '500'} text-center`}>{error}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-8`}>
        <p className={`text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'} text-center`}>
          Search for a city to get weather information
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-8`}>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className={`text-4xl font-bold mb-2 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
            {weather.temperature}°C
          </h2>
          <p className={`text-xl text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>
            {weather.city}, {weather.country}
          </p>
          <p className="text-weather-accent capitalize mt-2">
            {weather.description}
          </p>
        </div>
        <div className="relative">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt={weather.description}
            className="w-32 h-32"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-weather-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className={`text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>Humidity</span>
          </div>
          <p className={`text-2xl font-semibold text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
            {weather.humidity}%
          </p>
        </div>

        <div className={`bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-weather-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className={`text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>Wind Speed</span>
          </div>
          <p className={`text-2xl font-semibold text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
            {weather.windSpeed} km/h
          </p>
        </div>
      </div>

      <button
        onClick={refreshWeather}
        className={`mt-6 w-full py-3 bg-weather-accent/10 text-weather-accent rounded-xl hover:bg-weather-accent/20 transition-colors focus:outline-none focus:ring-2 focus:ring-weather-accent`}
      >
        Refresh
      </button>
    </div>
  );
}; 