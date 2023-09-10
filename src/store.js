import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { thingsApi } from "./reducers/things";

const store = configureStore({
    reducer:{
        [thingsApi.reducerPath]: thingsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thingsApi.middleware)
})

export default store