import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from './store';
import { User } from '../schemas/user';

const userDataControllSlice = createSlice({
  name: 'userDataControll',
  initialState: [],
  reducers: {
    setUserDataControll: (state: User[], action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { setUserDataControll } = userDataControllSlice.actions;
export const selectUserData = (state: IState) => state.userDataControll;

export default userDataControllSlice.reducer;
