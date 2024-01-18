import React, { useState, useCallback } from 'react';
import { AutoComplete, Input } from 'antd';
import WeatherService from '../../services/WeatherService';
import debounce from '../../utils/debounce';

const CitySearch = ({ onSelect }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = useCallback(debounce(async (value) => {
    if (value.length >= 3) {
      const cities = await WeatherService.findCities(value);
      setOptions(cities.map(city => ({
        value: city.name,
        key: city.id,
        label: `${city.name} (${city.sys.country})`,
      })));
    } else {
      setOptions([]);
    }
  }, 500), []);

  return (
    <AutoComplete
      options={options}
      onSearch={handleSearch}
      onSelect={onSelect}
      style={{ width: 270, marginTop: 40 }}
      size="large"
    >
      <Input.Search size="large" allowClear placeholder="Enter city name" />
    </AutoComplete>
  );
};

export default CitySearch;