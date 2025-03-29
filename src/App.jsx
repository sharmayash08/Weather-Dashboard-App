import { useWeather } from './context/WeatherContext';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { RecentSearches } from './components/RecentSearches';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const { isDarkMode } = useWeather();
  return (
      <div className={`min-h-screen bg-${isDarkMode ? 'weather-dark' : 'weather-light'} text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <button className={`p-2 rounded-lg bg-${isDarkMode ? 'weather-card-dark' : 'weather-card-light'}`}>
              <svg className={`w-6 h-6 text-${isDarkMode ? 'weather-text-dark' : 'weather-text-light'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <SearchBar />
            <ThemeToggle />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <WeatherCard />
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
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;