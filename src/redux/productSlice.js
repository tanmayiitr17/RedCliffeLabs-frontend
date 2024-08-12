import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        reagents: null,
        analyzers: null,
    },
    reducers: {
        addReagents: (state, action) => {
            state.reagents = action.payload;
        },
        addAnalyzers: (state, action) => {
            state.analyzers = action.payload;
        },
    }
})

export const { addReagents, addAnalyzers } = productSlice.actions;
export default productSlice.reducer;