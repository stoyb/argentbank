import { createSlice } from '@reduxjs/toolkit';

const firstNameSlice = createSlice({
  name: 'firstName',
  initialState: {
    firstName: '',
  },
  reducers: {
    setName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});


export const { setName } = firstNameSlice.actions;
  
export default firstNameSlice.reducer;