import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface PageState {
    page: number;
    pagesCount: number;
}

const initialState: PageState = {
    page: 1,
    pagesCount: 0,
}

export const pageSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        pagesCountUpdated(state, action: PayloadAction<number>){
            state.pagesCount = action.payload;
        },
        nextPage(state){
            state.page += 1;
        },
        prevPage(state){
            state.page -= 1;
        },
        pageChanged(state, action: PayloadAction<number>){
            state.page = action.payload;
        },
    }
})

export default pageSlice.reducer;