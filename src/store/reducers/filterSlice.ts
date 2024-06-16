import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type sexValues = "any" | "male" | "female";

interface FilterState {
    search: string,
    sex: sexValues,
    races: string[],
}

const initialState: FilterState = {
    search: "",
    sex: "any",
    races: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searhFilterUpdate(state, action: PayloadAction<string>){
            state.search = action.payload;
        },
        sexFilterUpdate(state, action: PayloadAction<"any" | "male" | "female">){
            state.sex = action.payload;
        },
        raceFilterUpdate(state, action: PayloadAction<string[]>){
            state.races = action.payload;
        },
    }
})

export default filterSlice.reducer;