import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import WeatherDisplay from './components/WeatherDisplay';
import CitySearch from './components/CitySearch';
import usePosition from './hooks/usePosition';
import WeatherService from './services/WeatherService';
import Layout from './components/Layout';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const { latitude, longitude, error: locationError } = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
      WeatherService.getWeatherByCoords(latitude, longitude)
        .then(data => setWeatherData(data))
        .catch(console.error);
    }
    if (locationError) {
      console.log(locationError);
    }
  }, [latitude, longitude, locationError]);

  const handleCitySelect = (value) => {
    WeatherService.getWeatherByCity(value)
      .then(data => setWeatherData(data))
      .catch(console.error);
  };

  return (
    <Layout>
       <Flex gap="middle" vertical>
        <CitySearch onSelect={handleCitySelect} />
        <WeatherDisplay weatherData={weatherData} />
      </Flex>
    </Layout>
  );
}

export default App;