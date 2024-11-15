import { updateLoadState, updateClientsData } from './clientsSlice';

export async function clientsLoad(dispatch) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = await fetch("https://fe.it-academy.by/Examples/mobile_company.json");

    if (response.ok) {
      const data = await response.json();
      dispatch(updateClientsData({ companyName: data.companyName, clients: data.clientsArr }));
      dispatch(updateLoadState({ state: 2, error: null }));
    } else {
      dispatch(updateLoadState({ state: 3, error: "HTTP error " + response.status }));
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
};
