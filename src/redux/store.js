import { configureStore } from '@reduxjs/toolkit'
import {
   persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE ,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
   } from 'redux-persist';
   import  storage  from 'redux-persist/lib/storage';

import bazarReducer from './BazarSlice' 

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, bazarReducer)


export const store =  configureStore({
  reducer: {bazar : persistedReducer },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});
export let persistor = persistStore(store);
