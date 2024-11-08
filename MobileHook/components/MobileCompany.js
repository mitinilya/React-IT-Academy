import React, {useState, useMemo, useEffect, useCallback} from 'react';


import {MobileClient} from './MobileClient';
import myEvent from './events';
import './MobileCompany.css';

export const MobileCompany = ({clients: initClients}) =>
{
  // static propTypes = {
   
  //   clients:PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       fam: PropTypes.string.isRequired,
  //       im: PropTypes.string.isRequired,
  //       otch: PropTypes.string.isRequired,
  //       balance: PropTypes.number.isRequired,
  //     })
      
  //   ),
  // };

  const [clients, setClients] = useState (initClients);
  const [filter, setFilter] = useState ('all');
  

  // componentDidMount() {
  //   myEvent.addListener('updateClient', this.updateClient);
  //   myEvent.addListener('deleteClient', this.deleteClient);
  //   myEvent.addListener('addClient', this.addClient);
  // }

  // componentWillUnmount() {
  //   myEvent.removeListener('updateClient', this.updateClient);
  //   myEvent.removeListener('deleteClient', this.deleteClient);
  //   myEvent.removeListener('addClient', this.addClient);
  // }

     const addClient = useCallback((newClient) => {
        let newClients = clients.slice();
        newClients.push(newClient);
        setClients (newClients);
     }, [clients]);
      const deleteClient = useCallback((clientId) => {
        let newClients = clients.slice().filter (c=> (c.id !== clientId));
        setClients (newClients);
      }, [clients]);

      const updateClient = useCallback((updatedClient) => {
        let newClients = clients.slice();

            newClients.forEach((c, i) => {
                if (c.id === updatedClient.id) {
                  newClients[i] = {...updatedClient};
      }})
      setClients(newClients);
    }, [clients]);
   
    useEffect(
      () => {
        myEvent.addListener('updateClient', updateClient);
        myEvent.addListener('deleteClient', deleteClient);
        myEvent.addListener('addClient', addClient);
        return () => {
          myEvent.removeListener('updateClient', updateClient);
          myEvent.removeListener('deleteClient', deleteClient);
          myEvent.removeListener('addClient', addClient);
        }
      }, [updateClient,addClient,deleteClient]);
      

  const getFilteredClients = useMemo (
    () => {
      if (filter === 'all') return clients;
      if (filter === 'active') return clients.filter (c=>(c.balance>=0));
      if (filter === "blocked") return clients.filter (c=>(c.balance < 0));
    }, [filter,clients]);

    console.log("MobileCompany render");

    return (
      <div>
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
      </div>
      
    )

  };
