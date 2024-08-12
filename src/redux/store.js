import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import productReducer from "./productSlice";
import userReducer from "./userSlice";

// Create the persist config
const persistConfig = {
    key: 'root',
    storage,
};

// Combine the reducers
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);
