import { configureStore } from '@reduxjs/toolkit';
import logginReducer from '../reducers/LogginReducer';
import UpdateReducer from '../reducers/UpdateReducer';

const store = configureStore({
  reducer: {
    auth: logginReducer,
    update: UpdateReducer,
  },
});
export default store;