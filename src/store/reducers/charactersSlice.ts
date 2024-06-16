import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import ICharacter from "../../types/ICharacter";

interface CharactersState {
    characters: ICharacter[];
    page: number;
    pagesCount: number;
    status: string | null;
}

const initialState: CharactersState = {
    characters: [],
    page: 1,
    pagesCount: 0,
    status: null,
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        charactersAdded(state, action: PayloadAction<ICharacter[]>){
            state.characters = action.payload;
        },
        pagesCountUpdated(state, action: PayloadAction<number>){
            state.pagesCount = action.payload;
        },
        nextPage(state){
            state.page += 1;
        },
        prevPage(state){
            state.page -= 1;
        },
        firstPage(state){
            state.page = 1;
        },
    }
})

export default charactersSlice.reducer;