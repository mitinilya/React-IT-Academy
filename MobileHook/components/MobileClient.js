import React, {useRef, useState, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import myEvent from './events';

import './MobileClient.css';

export const MobileClient = React.memo(({infoClient}) => {

  // state = {
  //   isEditing : false,
  // }

  const [isEditing, setIsEditing] = useState (false);

  const famRef = useRef (null);
  const imRef = useRef (null);
  const otchRef = useRef (null);
  const balanceRef = useRef (null);



  const onEdit = () => {
    setIsEditing(!isEditing);
  }

  const save = () => {
    myEvent.emit('updateClient', {
      id: infoClient.id,
      fam : famRef.current.value,
      im: imRef.current.value,
      otch: otchRef.current.value,
      balance : parseFloat(balanceRef.current.value)
  })
  setIsEditing (false);
  }

  const deleteClient = () => {
    myEvent.emit('deleteClient', infoClient.id);
  };
  


    console.log("MobileClient id="+ infoClient.id +" render");
    const status = infoClient.balance >= 0 ? 'active' : "blocked";
    return (
      <tr>
      {isEditing ? (
        <React.Fragment>
          <td><input ref = {famRef} defaultValue = {infoClient.fam}/></td>
          <td><input ref = {imRef} defaultValue={infoClient.im}/></td>
          <td><input ref = {otchRef} defaultValue = {infoClient.otch}/></td>
          <td><input ref = {balanceRef} defaultValue = {infoClient.balance}/></td>
          <td>{status}</td>
          <td><input type = "button" value = "Сохранить" onClick = {save}/></td>
          <td><input type = "button" value = "Удалить" onClick = {deleteClient}/></td>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <td>{infoClient.fam}</td>
          <td>{infoClient.im}</td>
          <td>{infoClient.otch}</td>
          <td>{infoClient.balance}</td>
          <td style={{ backgroundColor: status === 'active' ? 'green' : 'red', color: 'white' }}>{status}</td>
          <td><input type = "button" value = "Редактировать" onClick = {onEdit}/></td>
          <td><input type = "button" value = "Удалить" onClick = {deleteClient}/></td>
        </React.Fragment>    
      )
    }
    </tr>
    )

  }
)

