import { createSlice } from '@reduxjs/toolkit';

export interface ICountry {
  name: { common: string };
  cca2: string;
}

export interface IState {
  countries: ICountry[];
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    setCountries: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export const selectCountries = (state: IState) => state.countries;

export default countriesSlice.reducer;
