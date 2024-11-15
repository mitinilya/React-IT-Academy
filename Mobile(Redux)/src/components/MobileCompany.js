import React, {useState, useMemo, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientsLoad } from '../redux/clientsLoad';
import { addClient, deleteClient, updateClient } from '../redux/clientsSlice';
import {MobileClient} from './MobileClient';
import myEvent from './events';
import './MobileCompany.css';

export const MobileCompany = () =>
{
 
  const dispatch = useDispatch();
  const { clients, companyName, dataLoadState, dataLoadError } = useSelector(state => state.clients);
  const [filter, setFilter] = useState('all');
  
  useEffect(
    () => {
    if (dataLoadState === 0) {
      clientsLoad(dispatch);
    }
  }, [dispatch, dataLoadState]);
  

 


  useEffect(
    () => {
      const onAddClient = (newClient) =>dispatch(addClient(newClient));
      const onDeleteClient = (clientId)=>dispatch(deleteClient(clientId));
      const onUpdateClient = (updatedClient) => dispatch(updateClient( updatedClient ));
      myEvent.addListener('updateClient', onUpdateClient);
      myEvent.addListener('deleteClient', onDeleteClient);
      myEvent.addListener('addClient', onAddClient);
      return () => {
        myEvent.removeListener('updateClient', onUpdateClient);
        myEvent.removeListener('deleteClient', onDeleteClient);
        myEvent.removeListener('addClient', onAddClient);
      };
    
  }, []);
  
    

const getFilteredClients = useMemo (
  () => {
    if (filter === 'all') return clients;
    if (filter === 'active') return clients.filter (c=>(c.balance>=0));
    if (filter === "blocked") return clients.filter (c=>(c.balance < 0));
  }, [filter,clients]);

  console.log("MobileCompany render");
  

  return (
    <div>
       <h1>{companyName}</h1>
      {dataLoadState === 0 && " no data "}
      {dataLoadState === 1 && " loading... "}
      {dataLoadState === 3 && `Error: ${dataLoadError}`}
      {dataLoadState === 2 && (
      <React.Fragment>
        <div>
          <input type = "button" value = "Все" onClick = {()=>setFilter('all')}/>
          <input type = "button" value = "Актівные" onClick = {()=>setFilter('active')}/>
          <input type = "button" value = "Заблокированные" onClick = {()=>setFilter('blocked')}/>
        </div>
        <table>
          <thead>
            <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
          
            {getFilteredClients.map(c => (
              <MobileClient key = {c.id} infoClient = {c}/>
            ))}
          
          </tbody>
        </table>
        <input type = "button" value = "Добавить клиента" onClick = {()=> myEvent.emit('addClient', {id: Date.now(0), fam:"Владиславский", im: "Владислав", otch:"Владиславович", balance : 100})}/>
        </React.Fragment>
        )}
    </div>
    
  )

};
