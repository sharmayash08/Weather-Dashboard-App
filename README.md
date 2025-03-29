# Weather Dashboard

A modern, responsive weather dashboard built with React and Vite, featuring real-time weather data, 5-day forecasts, and a beautiful dark/light mode interface.

# Deployed Link : https://weather-dashboard-app-pied.vercel.app/

## 🌟 Features

- Real-time weather information for any city
- 5-day weather forecast
- Sunrise and sunset times with visual progress bar
- Dark/Light mode toggle
- Recent searches history
- Responsive design for all devices
- Beautiful UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** lucide Icons
- **Weather Data:** OpenWeatherMap API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔑 API Integration

This project uses the OpenWeatherMap API to fetch weather data. Here are the key details:

### Rate Limits
- Free tier: 60 calls/minute
- 1,000,000 calls/month

### API Key Setup
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your API key from your account dashboard
3. Add it to your `.env` file

### Data Units
- Temperature: Celsius
- Wind Speed: m/s
- Time: UTC

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RecentSearches.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ForecastCard.jsx
│   │   └── SunriseSunset.jsx
│   ├── context/
│   │   └── WeatherContext.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom color scheme

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icons
