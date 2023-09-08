import { IBook } from "../../types/types";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BookDetailsState {
    bookDetails: IBook,
    isLoading: boolean,
    error: string
}

const initialState: BookDetailsState = {
    bookDetails: {},
    isLoading: false,
    error: ''
}

export const bookDetailsSlice = createSlice({
    name: 'bookDetails',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true;
        },
        booksFetchingSuccess(state, action: PayloadAction<IBook>) {
            state.isLoading = false;
            state.error = '';
            state.bookDetails = action.payload;
        },
        booksFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default bookDetailsSlice.reducer;