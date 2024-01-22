// Redux Store
import { configureStore } from '@reduxjs/toolkit';
import LogginReducer from '../reducers/LogginReducer';
import UpdateReducer from '../reducers/UpdateReducer';

const store = configureStore({
  reducer: {
    auth: LogginReducer,
    update: UpdateReducer
  }
});
export default store;