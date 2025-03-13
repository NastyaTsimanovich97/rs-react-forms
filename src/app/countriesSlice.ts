import { createSlice } from '@reduxjs/toolkit';
import { IState } from './store';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    setCountries: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export const selectCountries = (state: IState) => state.countries;

export default countriesSlice.reducer;
