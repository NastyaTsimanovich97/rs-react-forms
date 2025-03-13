import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ICountry,
  selectCountries,
  setCountries,
} from '../../app/countriesSlice';

const CountryAutocomplete = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      dispatch(setCountries(data));
    };

    fetchCountries();
  }, [dispatch]);

  useEffect(() => {
    if (inputValue) {
      const matchedCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredCountries(matchedCountries);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  }, [inputValue, countries]);

  const handleSelectCountry = (country: ICountry) => {
    setInputValue(country.name.common);
    setDropdownVisible(false);
  };

  return (
    <div>
      <label htmlFor="country-input">Select a Country:</label>
      <input
        id="country-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setDropdownVisible(true)}
        placeholder="Start enter a country"
      />
      {isDropdownVisible && (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca2} onClick={() => handleSelectCountry(country)}>
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryAutocomplete;
