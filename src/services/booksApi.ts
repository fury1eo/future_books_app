import axios from "axios";
import { IBook, IResponse } from "../types/types";
import { AppDispatch } from "../store/store";
import { bookSlice } from "../store/reducers/BookSlice";
import { modalError } from "../components/modalError";
import { bookDetailsSlice } from "../store/reducers/BookDetailsSlice";

const API_KEY = 'AIzaSyAV7kFyO-Kr-FsyRmVthjCWpJuZZkKoBwA';

export const getBooks = (refetch: boolean = false, searchQuery: string, order: string = 'relevance', category: string = 'all', page: number = 1) => async (dispatch: AppDispatch) => {
    try {
        
        dispatch(bookSlice.actions.booksFetching());

        const response = await axios.get<IResponse>(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery.replaceAll(' ', '+')}${category !== 'all' ? '+subject:' + category : ''}&orderBy=${order}&startIndex=${(page - 1) * 30}&maxResults=30&key=${API_KEY}`);

        refetch
            ? dispatch(bookSlice.actions.booksRefetchingSuccess(response.data.items))
            : dispatch(bookSlice.actions.booksFetchingSuccess(response.data));

    } catch (e: any) {

        dispatch(bookSlice.actions.booksFetchingError(e.message));
        modalError(e.code);
        
    }
}

export const getBookById = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(bookDetailsSlice.actions.booksFetching());

        const response = await axios.get<IBook>(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`);

        dispatch(bookDetailsSlice.actions.booksFetchingSuccess(response.data));

    } catch (e: any) {

        dispatch(bookDetailsSlice.actions.booksFetchingError(e.message));
        modalError(e.message);

    }
}