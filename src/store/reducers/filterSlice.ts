import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type genderValues = "any" | "male" | "female";

interface FilterState {
    search: string,
    gender: genderValues,
    races: string[],
}

const initialState: FilterState = {
    search: "",
    gender: "any",
    races: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searhFilterUpdate(state, action: PayloadAction<string>){
            state.search = action.payload;
        },
        genderFilterUpdate(state, action: PayloadAction<"any" | "male" | "female">){
            state.gender = action.payload;
        },
        raceFilterUpdate(state, action: PayloadAction<string[]>){
            state.races = action.payload;
        },
    }
})

export default filterSlice.reducer;