import React from "react";
import "./ShopDescription.css";

class ShopDescription extends React.Component {
  
  productSelected = () =>{
    console.log(this.props.id)
    this.props.cbSelectedProduct(this.props.id)
  }

  buttonDel = (event) => {
    event.stopPropagation();//????
    console.log (this.props.id)
    this.props.cbDeleteProduct (this.props.id)
  }
  render() {

    return (
      <div className={`ShopDescriptionTitle ${this.props.cbSelectedProductColor ? 'selected' : ''}`} value = {this.props.id} onClick = {this.productSelected}>
        <span className="ShopDescriptionTitle_id">{this.props.id} </span>
        <span className="ShopDescriptionTitle_name">{this.props.name}</span>
        <span className="ShopDescriptionTitle_count">{this.props.count} шт.</span>
        <span className="ShopDescriptionTitle_img">
          <img src={this.props.url_photo} />
        </span>
        <span className="ShopDescriptionTitle_price">{this.props.price} $</span>
        <input
         type = "button" value = "Удалить" className = "ButtonDelete" onClick = {this.buttonDel}>
         </input>
      </div>
    );
  }
}

export default ShopDescription;
