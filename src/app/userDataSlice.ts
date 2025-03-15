import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, IUserData } from './store';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: [],
  reducers: {
    setUserData: (state: IUserData[], action: PayloadAction<IUserData>) => {
      state.push(action.payload);
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export const selectUserData = (state: IState) => state.userData;

export default userDataSlice.reducer;
