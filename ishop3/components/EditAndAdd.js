import React from 'react';

class EditAndAdd extends React.Component {
 state = {
    id: this.props.prod.id,
    name: this.props.prod.name,
    url_photo : this.props.prod.url_photo,
    price: this.props.prod.price,
    count : this.props.prod.count,
    nameError: '',
    linkError : '',
    priceError: '',
    countError: '',
    validOk : false,
    isChanged : false
   }
   
   componentDidUpdate(prevProps, prevState) {
    if (prevProps.prod.id !== this.props.prod.id) {
      this.setState({
        id: this.props.prod.id,
        name: this.props.prod.name,
        url_photo: this.props.prod.url_photo,
        price: this.props.prod.price,
        count: this.props.prod.count,
        isChanged: false,
      })}
    
    if (prevState.isChanged !== this.state.isChanged) {
      this.props.cbUpdateChangeStatus(this.state.isChanged);
    }
  }
  
    nameChanged = (eo) => {
        this.setState({name:eo.target.value, isChanged: true},this.valid);
    }
    linkChanged = (eo) => {
            this.setState({url_photo:eo.target.value, isChanged: true},this.valid);
    }
    priceChanged = (eo) => {
            this.setState({price:eo.target.value, isChanged : true},this.valid);
    }
    countChanged = (eo) => {
        this.setState({count:eo.target.value, isChanged : true},this.valid);
    }

    save = () => {
        if (this.state.validOk) {
          this.props.cbSaveChanges ({id: this.state.id, name: this.state.name, url_photo:this.state.url_photo, price: this.state.price, count:this.state.count}, this.valid);
        }
        this.setState({isChanged : false})
      };

   valid = () =>{
    const nameError = this.state.name ? '' : "Введите имя товара";
    const linkError = this.state.url_photo ? '' : "Введите ссылку на картинку";
    const priceError = this.state.price ? '' : "Введите цену";
    const countError = this.state.count ? '' : "Введите кол-во";
    const validOk = (!nameError) && (!linkError) && (!priceError) && (!countError)
    this.setState ({nameError,linkError,priceError,countError, validOk})
   }
   render() {
   
    return (
        <div>
      
            <span>ID: {this.state.id}</span>
            <div><input type = "text" value = {this.state.name} onChange = {this.nameChanged} placeholder='Введите товар'></input></div>
            <span>{this.state.nameError}</span>
            <div><input type = "text" value = {this.state.url_photo} onChange = {this.linkChanged} placeholder='Введите URL'></input></div>
            <span>{this.state.linkError}</span>
            <div><input type = "text" value = {this.state.price} onChange = {this.priceChanged} placeholder='Введите цену'></input></div>
            <span>{this.state.priceError}</span>
            <div><input type = "text" value = {this.state.count} onChange = {this.countChanged} placeholder='Введите количество'></input></div>
            <span>{this.state.countError}</span>
            <div>
                <input type = "button" disabled = {!this.state.validOk} value = "сохранить" onClick={this.save}></input>
                <input type = "button" value = "отмена" onClick = {this.props.cbCancelChanges}></input>
            </div>
        </div>
    )
 }
}
export default EditAndAdd;