import React from 'react';

import './Shop.css';
import ShopDescription from "./ShopDescription";

class Shop extends React.Component {
  state = {
    selectProductCode : null,
    autoproductsDel : this.props.autoproducts,
  }

  selectProduct = (id) => {
    this.setState ({selectProductCode:id})
  }

  deleteProduct = (id) => {
    console.log ("SHOOPDEL" + id)
    const filteredProducts = this.state.autoproductsDel.filter(product => product.id !== id);
    this.setState({ autoproductsDel: filteredProducts });
  }

  render() {
    const autoproductsCode = this.state.autoproductsDel.map (v =>
      <ShopDescription key = {v.id}
       id = {v.id}
       name = {v.name} price = {v.price} count = {v.count} url_photo = {v.url_photo} 
       cbSelectedProduct = {this.selectProduct}
       cbSelectedProductColor = {this.state.selectProductCode == v.id}
       cbDeleteProduct = {this.deleteProduct}/>,
    )

    return (
      <div className='Shop'>
        <span className='Shop_Text'>
          {this.props.name}
        </span>
        <p className = 'Shop_Address'>
          {this.props.address}
        </p>
        <p className = "Shop_Title">
          {this.props.title}
        </p>
        <div className = "Autoproducts">{autoproductsCode}</div>
      </div>
    );
  }

}

export default Shop;
