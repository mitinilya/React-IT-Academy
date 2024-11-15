import { configureStore } from '@reduxjs/toolkit';

import clientsReducer from './clientsSlice';

export const mobile = configureStore({
    reducer: {
        clients: clientsReducer,
    },
    // the thunk middleware adds automatically
})
