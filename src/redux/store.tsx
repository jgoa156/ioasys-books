import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slicer/user";

const persistConfig = {
	key: "user",
	storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
	reducer: {
		user: persistedReducer
	},
})

const persistor = persistStore(store);

export { store, persistor }