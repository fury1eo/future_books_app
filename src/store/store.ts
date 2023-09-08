import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from './reducers/BookSlice';
import optionsReducer from './reducers/OptionsSlice';
import bookDetailsReducer from './reducers/BookDetailsSlice';

const rootReducer = combineReducers({
    bookReducer,
    bookDetailsReducer,
    optionsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];