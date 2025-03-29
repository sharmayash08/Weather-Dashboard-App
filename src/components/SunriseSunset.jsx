import { useWeather } from '../context/WeatherContext';

export const SunriseSunset = () => {
  const { weather, isDarkMode } = useWeather();

  if (!weather) return null;

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Calculate day length
  const dayLength = weather.sunset - weather.sunrise;
  const hours = Math.floor(dayLength / (1000 * 60 * 60));
  const minutes = Math.floor((dayLength % (1000 * 60 * 60)) / (1000 * 60));

  // Calculate current time percentage for progress bar
  const now = new Date();
  const progress = Math.min(
    Math.max(
      ((now - weather.sunrise) / (weather.sunset - weather.sunrise)) * 100,
      0
    ),
    100
  );

  return (
    <div className={`bg-${isDarkMode ? 'weather-card-light' : 'weather-card-light'} shadow-lg rounded-2xl p-6 mt-6`}>
      <h2 className={`text-xl font-semibold mb-4 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
        Sunrise & Sunset
      </h2>
      
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
        <div className={`h-2 bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-full overflow-hidden`}>
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl`}>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <span className={`text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>Sunrise</span>
          </div>
          <p className={`text-lg font-semibold text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
            {formatTime(weather.sunrise)}
          </p>
        </div>

        <div className={`p-4 bg-${isDarkMode ? 'weather-dark' : 'weather-light'}/30 rounded-xl`}>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span className={`text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'}`}>Sunset</span>
          </div>
          <p className={`text-lg font-semibold text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
            {formatTime(weather.sunset)}
          </p>
        </div>
      </div>

      <div className={`mt-4 text-center text-${isDarkMode ? 'weather-secondary-dark' : 'weather-secondary-light'} text-sm`}>
        Day Length: {hours}h {minutes}m
      </div>
    </div>
  );
}; 