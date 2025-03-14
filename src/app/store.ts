import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import userDataReducer from './userDataSlice';

export interface ICountry {
  name: { common: string };
  cca2: string;
}

export interface IUserData {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  repeatPassword?: string;
  tc?: boolean;
  file: string | null;
  country?: string;
  gender?: string;
}

export interface IState {
  countries: ICountry[];
  userData: IUserData[];
}

export default configureStore({
  reducer: {
    countries: countriesReducer,
    userData: userDataReducer,
  },
});
