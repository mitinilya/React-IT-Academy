import React from 'react';

import './Shop.css';
import ShopDescription from "./ShopDescription";

class Shop extends React.Component {
  
  render() {
    const autoproductsCode = this.props.autoproducts.map (v =>
      <ShopDescription key = {v.id} name = {v.name} price = {v.price} count = {v.count} url_photo = {v.url_photo} />,
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
