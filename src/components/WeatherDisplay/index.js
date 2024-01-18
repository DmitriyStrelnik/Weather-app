import React from 'react';
import { StyledCard } from './styled';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <StyledCard loading />;
  }

  return (
    <StyledCard title={`Weather in ${weatherData.name}`}>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </StyledCard>
  );
};

export default WeatherDisplay;