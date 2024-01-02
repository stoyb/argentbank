import { createSlice } from '@reduxjs/toolkit';

const updateSlice = createSlice({
  name: 'update',
  initialState: {
    firstName: '',
    lastName: '',
  },
  reducers: {
    editFirstName: (state, action) => {
      const firstName = action.payload;
      state.firstName = firstName;
    },
    editLastName: (state, action) => {
      const lastName = action.payload;
      state.lastName = lastName;
    }
  },
});

export const { editFirstName, editLastName } = updateSlice.actions;

export default updateSlice.reducer;
