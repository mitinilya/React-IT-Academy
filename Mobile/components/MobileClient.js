import React from 'react';
import PropTypes from 'prop-types';
import myEvent from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    infoClient: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  };
  

  state = {
    isEditing : false,
  }

  famRef = React.createRef();
  imRef = React.createRef();
  otchRef = React.createRef();
  balanceRef = React.createRef();



  onEdit = () => {
    this.setState({isEditing: !this.state.isEditing});
  }

  save = () => {
    myEvent.emit('updateClient', {
      id: this.props.infoClient.id,
      fam : this.famRef.current.value,
      im: this.imRef.current.value,
      otch: this.otchRef.current.value,
      balance : parseFloat(this.balanceRef.current.value)
  })
  this.setState({isEditing:false})
  }

  delete = () => {
    myEvent.emit('deleteClient', this.props.infoClient.id);
  };
  




  render() {

    console.log("MobileClient id="+this.props.infoClient.id +" render");
    const status = this.props.infoClient.balance >= 0 ? 'active' : "blocked";
    return (
      <tr>
      {this.state.isEditing ? (
      <React.Fragment>
        <td><input ref = {this.famRef} defaultValue = {this.props.infoClient.fam}/></td>
        <td><input ref = {this.imRef} defaultValue={this.props.infoClient.im}/></td>
        <td><input ref = {this.otchRef} defaultValue = {this.props.infoClient.otch}/></td>
        <td><input ref = {this.balanceRef} defaultValue = {this.props.infoClient.balance}/></td>
        <td>{status}</td>
        <td><input type = "button" value = "Сохранить" onClick = {this.save}/></td>
        <td><input type = "button" value = "Удалить" onClick = {this.delete}/></td>
      </React.Fragment>
      ) : (
        <React.Fragment>
          <td>{this.props.infoClient.fam}</td>
          <td>{this.props.infoClient.im}</td>
          <td>{this.props.infoClient.otch}</td>
          <td>{this.props.infoClient.balance}</td>
          <td style={{ backgroundColor: status === 'active' ? 'green' : 'red', color: 'white' }}>{status}</td>
          <td><input type = "button" value = "Редактировать" onClick = {this.onEdit}/></td>
          <td><input type = "button" value = "Удалить" onClick = {this.delete}/></td>
        </React.Fragment>    
      )
    }
    </tr>
    )

  }

}

export default MobileClient;
