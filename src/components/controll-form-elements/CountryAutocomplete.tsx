import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Controller, Control } from 'react-hook-form';

import { selectCountries, setCountries } from '../../app/countriesSlice';
import { ICountry } from '../../app/store';
import { User } from '../../schemas/user';

interface ICountryAutocompleteProps {
  name: keyof User;
  control: Control<User>;
}

const CountryAutocompleteControll = (props: ICountryAutocompleteProps) => {
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
      <label htmlFor="country">Select a Country:</label>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onFocus={() => setDropdownVisible(true)}
              placeholder="Start enter a country"
            />
            {isDropdownVisible && (
              <ul>
                {filteredCountries.map((country) => (
                  <li
                    key={country.cca2}
                    onClick={() => {
                      handleSelectCountry(country);
                      field.onChange(country.name.common);
                    }}
                  >
                    {country.name.common}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CountryAutocompleteControll;
