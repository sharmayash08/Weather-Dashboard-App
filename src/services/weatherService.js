const API_KEY = '763c6fa46644ba4f0240aefb1c31f514';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
    async getWeather(city) {
        const response = await fetch(
            `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'City not found');
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
            country: data.sys.country
        };
    }
}; 