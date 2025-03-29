import { useWeather } from '../context/WeatherContext';

export const RecentSearches = () => {
  const { recentSearches, searchWeather, isDarkMode } = useWeather();

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-3">
        {recentSearches.map((city) => (
          <button
            key={city}
            onClick={() => searchWeather(city)}
            className={`p-3 bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl text-left 
              hover:bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/50 
              focus:outline-none focus:ring-2 focus:ring-weather-accent
              transition-colors`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-weather-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className={`text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'} font-medium`}>
                {city}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 