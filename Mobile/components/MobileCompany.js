import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import myEvent from './events';
import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
   
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
      
    ),
  };

  state = {
    clients: this.props.clients,
    filter: 'all'
  };

  componentDidMount() {
    myEvent.addListener('updateClient', this.updateClient);
    myEvent.addListener('deleteClient', this.deleteClient);
    myEvent.addListener('addClient', this.addClient);
  }

  componentWillUnmount() {
    myEvent.removeListener('updateClient', this.updateClient);
    myEvent.removeListener('deleteClient', this.deleteClient);
    myEvent.removeListener('addClient', this.addClient);
  }
  addClient = (newClient) => {
    let newClients = [...this.state.clients, {...newClient}];
    this.setState ({clients:newClients});
  }
  deleteClient = (clientId) => {
     let newClients = this.state.clients.filter (c=> (c.id !== clientId));
     this.setState ({clients:newClients})


  }

  updateClient = (updatedClient) => {
    let newClients = [...this.state.clients];

        newClients.forEach((c, i) => {
            if (c.id === updatedClient.id) {
              newClients[i] = {...updatedClient};
  }})
  this.setState({clients:newClients})
}


  setFiler = (filter) => {
    this.setState({filter});
  }

  getFilteredClients = () => {
    if (this.state.filter === 'all') return this.state.clients;
    if (this.state.filter === 'active') return this.state.clients.filter (c=>(c.balance>=0));
    if (this.state.filter === "blocked") return this.state.clients.filter (c=>(c.balance < 0));
  }
  

  
  
  render() {

    console.log("MobileCompany render");
    let filteredClients = this.getFilteredClients();

    return (
      <div>
        <div>
          <input type = "button" value = "Все" onClick = {() =>this.setFiler('all')}/>
          <input type = "button" value = "Актівные" onClick = {()=> this.setFiler('active')}/>
          <input type = "button" value = "Заблокированные" onClick = {()=>this.setFiler('blocked')}/>
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
          
            {filteredClients.map(c => (
              <MobileClient key = {c.id} infoClient = {c}/>
            ))}
           
          </tbody>
        </table>
        <input type = "button" value = "Добавить клиента" onClick = {()=> myEvent.emit('addClient', {id: Date.now(0), fam:"Владиславский", im: "Владислав", otch:"Владиславович", balance : 100})}/>
      </div>
      
    )
    ;

  }
}

export default MobileCompany;
