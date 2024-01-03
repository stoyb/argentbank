import { createSlice } from '@reduxjs/toolkit';

const updateSlice = createSlice({
  name: 'update',
  initialState: {
    firstName: '',
    lastName: '',
  },
  reducers: {
    editFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    editLastName: (state, action) => {
      state.lastName = action.payload;
    }
  },
});

export const { editFirstName, editLastName } = updateSlice.actions;

export default updateSlice.reducer;
