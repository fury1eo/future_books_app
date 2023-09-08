import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OptionsState {
    searchQuery: string,
    category: string,
    order: string
}

const initialState: OptionsState = {
    searchQuery: '',
    category: 'all',
    order: 'relevance'
}

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        saveSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        saveCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        saveOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload;
        }
    }
});

export default optionsSlice.reducer;