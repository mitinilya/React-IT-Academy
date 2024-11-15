import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  companyName: '',
  clients: [],
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers:
   {
    updateLoadState: (state, action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
    updateClientsData: (state, action) => {
      state.companyName = action.payload.companyName;
      state.clients = action.payload.clients;
    },
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
    deleteClient: (state, action) => {
      state.clients = state.clients.filter(client => client.id !== action.payload);
    },
    updateClient: (state, action) => {
      state.clients = state.clients.map(client =>
        client.id === action.payload.id?{ ...client, ...action.payload }: client
      )
    }}});

export const { updateLoadState, updateClientsData, addClient, deleteClient, updateClient } = clientsSlice.actions;
export default clientsSlice.reducer;
