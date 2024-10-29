import React from 'react';

import './Shop.css';
import ShopDescription from "./ShopDescription";
import EditAndAdd from "./EditAndAdd"
import ViewProduct from "./ViewProduct"

class Shop extends React.Component {
  state = {
    selectProduct: null,
    autoproductsDel : this.props.autoproducts,
    workMode : 0, // 0 ничего 1- просмотр 2 - редактирование/добавление
    isEditting : null,
  }

  selectProduct = (product) => {
    if (!this.state.isEditting){
    this.setState ({
      selectProduct: product,
      workMode: 1
      
    })
  }
  }

  deleteProduct = (id) => {
    console.log ("SHOOPDEL" + id)
    const filteredProducts = this.state.autoproductsDel.filter(product => product.id !== id);
    this.setState({ autoproductsDel: filteredProducts, selectProduct: null });
  }

  editProduct = (product) => {
 
    this.setState ({
      selectProduct: product,
      workMode: 2,
      isEditting : product.id,
    }
  )}
    

  
  
  addProduct = () => {
    const maxId = this.state.autoproductsDel.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const newProduct = { id: parseInt(maxId) + 1, name: '', price: '', count: '', url_photo: '' };
      this.setState ({
      selectProduct: newProduct,
      workMode : 2,
      isEditting : newProduct.id,
    })
  }

  saveChangesProduct = (product) => {
    const products = this.state.autoproductsDel.slice();
    const productIndex = products.findIndex(p => p.id === product.id);
    if (productIndex!== -1) {
        products[productIndex] = product;
      }

    else {
      product.id = parseInt(this.state.autoproductsDel.length);
      products.push(product);
    }
  
    this.setState({
      autoproductsDel: products,
      isEditting: null,
      workMode: 1,
      selectProduct: product
    });
  };
  
    
  
  cancelAddOrEditProduct = () => {
    this.setState({
      isEditting: null,
      workMode: 1,
      selectProduct: null
    })}
  

    updateChangeStatus = (isChanged) =>{
      this.setState ({isEditting : isChanged})

    }
  
  render() {
    const autoproductsCode = this.state.autoproductsDel.map (v =>
      <ShopDescription key = {v.id}
       id = {v.id}
       name = {v.name} price = {v.price} count = {v.count} url_photo = {v.url_photo}
       cbSelectedProduct = {this.selectProduct}
       cbSelectedProductColor = {this.state.selectProduct && this.state.selectProduct.id === v.id}
       cbDeleteProduct = {this.deleteProduct}
       cbEditProduct={() => this.editProduct(v)}
       edit = {this.state.isEditting === v.id || this.state.isEditting === true}
       />,
    )

    return (
      <div className='Shop'>
        <span className='Shop_Text'>{this.props.name}</span>
        <p className = 'Shop_Address'>{this.props.address}</p>
        <p className = "Shop_Title">{this.props.title}</p>
        <div className = "Autoproducts">{autoproductsCode}</div>
        <input type = "button" value = "Добавить продукт" onClick = {this.addProduct} disabled = {this.state.isEditting === true} ></input>
        {this.state.workMode == 1 && (
          <ViewProduct
          prod = {this.state.selectProduct}
          />
        )}
          {this.state.workMode === 2 && (
            <EditAndAdd
            key = {this.state.selectProduct.id}
            prod = {this.state.selectProduct}
            cbSaveChanges = {this.saveChangesProduct}
            cbCancelChanges = {this.cancelAddOrEditProduct}
            cbEditProduct = {() => this.editProduct(product)}
            cbUpdateChangeStatus = {this.updateChangeStatus}
            />
          )}
      </div>
    );}}
export default Shop;