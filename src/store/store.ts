import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./reducers/pageSlice";
import filterSlice from "./reducers/filterSlice";

const store = configureStore({
    reducer: {
        page: charactersSlice,
        filter: filterSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;