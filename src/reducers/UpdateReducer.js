import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
  },
  reducers: {
    editUserProfile: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { editUserProfile } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
