import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contatcsSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(contactsApi.middleware);

const store = configureStore({
    reducer: {
    contacts: persistReducer(persistConfig, contactsSlice.reducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware)
   
})

export default store ;