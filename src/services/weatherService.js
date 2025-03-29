const API_KEY = '763c6fa46644ba4f0240aefb1c31f514';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
    async getWeather(city) {
        const response = await fetch(
            `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        return {
            city: data.name,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed),
            icon: data.weather[0].icon,
            country: data.sys.country,
            sunrise: new Date(data.sys.sunrise * 1000),
            sunset: new Date(data.sys.sunset * 1000),
            timezone: data.timezone
        };
    },

    async getForecast(city) {
        const response = await fetch(
            `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('Forecast data not available');
        }

        const data = await response.json();
        
        // Group forecast by day and get the middle time of each day (around noon)
        const dailyForecasts = data.list.reduce((acc, forecast) => {
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString();
            
            if (!acc[day] || Math.abs(date.getHours() - 12) < Math.abs(new Date(acc[day].dt * 1000).getHours() - 12)) {
                acc[day] = forecast;
            }
            
            return acc;
        }, {});

        // Convert to array and take only next 5 days
        return Object.values(dailyForecasts).slice(0, 5).map(forecast => ({
            date: new Date(forecast.dt * 1000),
            temperature: Math.round(forecast.main.temp),
            description: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
            humidity: forecast.main.humidity,
            windSpeed: Math.round(forecast.wind.speed)
        }));
    }
}; 