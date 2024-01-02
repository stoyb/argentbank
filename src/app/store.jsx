import { configureStore } from '@reduxjs/toolkit';
import AddNameReducer from '../reducers/AddNameReducer';
import LogginReducer from '../reducers/LogginReducer';
//import UpdateReducer from '../reducers/UpdateReducer';

const store = configureStore({
  reducer: {
    auth: LogginReducer,
    firstName: AddNameReducer
    // update: UpdateReducer,
  },
});
export default store;