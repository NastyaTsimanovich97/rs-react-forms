import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import userDataReducer from './userDataSlice';
import userDataControllReducer from './userDataControllSlice';
import { User } from '../schemas/user';

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
  userDataControll: User[];
}

export default configureStore({
  reducer: {
    countries: countriesReducer,
    userData: userDataReducer,
    userDataControll: userDataControllReducer,
  },
});
