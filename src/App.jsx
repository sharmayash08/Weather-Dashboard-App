import { useWeather } from './context/WeatherContext';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { RecentSearches } from './components/RecentSearches';
import { ThemeToggle } from './components/ThemeToggle';
import { ForecastCard } from './components/ForecastCard';
import { SunriseSunset } from './components/SunriseSunset';
import './App.css';

function App() {
  const { isDarkMode } = useWeather();
  return (
    <div className={`min-h-screen bg-${isDarkMode ? 'weather-dark' : 'weather-light'} transition-colors`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <SearchBar />
          <ThemeToggle />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WeatherCard />
            <SunriseSunset />
          </div>
          <div className="space-y-6">
            <div className={`bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'} rounded-2xl p-6`}>
              <h2 className={`text-xl font-semibold mb-4 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
                Recent Searches
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <RecentSearches />
              </div>
            </div>
            <ForecastCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;