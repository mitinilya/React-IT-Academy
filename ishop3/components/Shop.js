import React from 'react';

import './Shop.css';
import ShopDescription from "./ShopDescription";



class Shop extends React.Component {
  state = {
    selectProduct: null,
    autoproductsDel : this.props.autoproducts,
  }

  selectProduct = (product) => {
    this.setState ({
      selectProduct: product,
    })
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
       cbSelectedProductColor = {this.state.selectProduct && this.state.selectProduct.id === v.id}
       cbDeleteProduct = {this.deleteProduct}/>,
    )

    return (
      <div className='Shop'>
        <span className='Shop_Text'>{this.props.name}</span>
        <p className = 'Shop_Address'>{this.props.address}</p>
        <p className = "Shop_Title">{this.props.title}</p>
        <div className = "Autoproducts">{autoproductsCode}</div>
        <input type = "button" value = "Добавить продукт" onClick = "buttonAdd"></input>
       
        {this.state.selectProduct && (
          <div className='SelectProduct'>
            <p className="SelectPrTitle">Вы выбрали:</p>
            <p>{this.state.selectProduct.name}</p>
            <p>{this.state.selectProduct.price} $</p>
            <div className='SelectPhoto'>
            <img src = {this.state.selectProduct.url_photo} />
            </div>
      </div>
      ) }
</div>
    )}};

export default Shop;
