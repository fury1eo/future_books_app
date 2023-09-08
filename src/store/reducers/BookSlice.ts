import { IBook, IResponse } from "../../types/types";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BookState {
    totalCount: number,
    currentPage: number,
    books: IBook[],
    isLoading: boolean,
    error: string
}

const initialState: BookState = {
    totalCount: 0,
    currentPage: 1,
    books: [],
    isLoading: false,
    error: ''
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true;
        },
        booksFetchingSuccess(state, action: PayloadAction<IResponse>) {
            state.isLoading = false;
            state.error = '';
            state.books = action.payload.items;
            state.totalCount = action.payload.totalItems;
        },
        booksFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        booksRefetchingSuccess(state, action: PayloadAction<IBook[]>) {
            state.isLoading = false;
            state.error = '';
            state.books = [...state.books, ...action.payload];
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    }
});

export default bookSlice.reducer;