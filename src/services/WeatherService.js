import axios from 'axios';

const API_KEY = '81a3528a927754175c2d40aecf55cfe2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

class WeatherService {
  static async getWeatherByCoords(lat, lon) {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  }

  static async getWeatherByCity(city) {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  }

  static async findCities(query) {
    const response = await axios.get(`${BASE_URL}/find`, {
      params: {
        q: query,
        appid: API_KEY,
      },
    });
    return response.data.list;
  }
}

export default WeatherService;