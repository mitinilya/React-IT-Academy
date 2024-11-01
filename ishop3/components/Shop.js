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
    isChanged : false,
    nextId : this.props.autoproducts.length+1,
    delAndEditButton : false
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
    const filteredProducts = this.state.autoproductsDel.filter(product => product.id !== id);
    if (this.state.isEditting === id) {
      this.setState({ 
        autoproductsDel: filteredProducts,
        selectProduct: null,
        isEditting: null
      });
    } else {
      this.setState({ autoproductsDel: filteredProducts});
    }
  }
  

  editProduct = (product) => {

    this.setState ({
      selectProduct: product,
      workMode: 2,
      isEditting : product.id,
      isChanged : false
    }
  )}
    

  
  addProduct = () => {
    const newProduct = { 
      id: this.state.nextId, 
      name: '', 
      price: '', 
      count: '', 
      url_photo: '' 
    };
      this.setState ({
      selectProduct: newProduct,
      workMode : 2,
      isEditting : newProduct.id,
      delAndEditButton : true,
      isChanged : true
    })
  }

  saveChangesProduct = (product) => {
    const products = this.state.autoproductsDel.slice();
    const productIndex = products.findIndex(p => p.id === product.id);
    if (productIndex!== -1) {
        products[productIndex] = product;
      }

    else {
     
      products.push(product);
      this.setState(prevstate =>({
        nextId: prevstate.nextId + 1
      }) )
    }
      
  
    this.setState({
      autoproductsDel: products,
      workMode: 1,
      isEditting : null,
      selectProduct: product,
      delAndEditButton : false,
      isChanged : false
    });
  };
  
    
  
  cancelAddOrEditProduct = () => {
    this.setState({
      isEditting: null,
      workMode: 1,
      selectProduct: null,
      delAndEditButton : false,
      isChanged : false
    })}
  

  updateChangeStatus = (isChanged) =>{
      this.setState ({ isChanged})

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
       cbAddProduct = {this.state.delAndEditButton}
       edit = {this.state.isEditting === v.id}
       isChanged={this.state.isChanged} 
       />,
    )

    return (
      <div className='Shop'>
        <span className='Shop_Text'>{this.props.name}</span>
        <p className = 'Shop_Address'>{this.props.address}</p>
        <p className = "Shop_Title">{this.props.title}</p>
        <div className = "Autoproducts">{autoproductsCode}</div>
        <input type = "button" value = "Добавить продукт" onClick = {this.addProduct} disabled = {this.state.isChanged} ></input>
        {this.state.workMode == 1 && this.state.selectProduct && (
          <ViewProduct
          prod = {this.state.selectProduct}
          />
        )}
          {this.state.workMode === 2 && this.state.selectProduct && (
            <EditAndAdd
            key = {this.state.selectProduct.id}
            prod = {this.state.selectProduct}
            cbSaveChanges = {this.saveChangesProduct}
            cbCancelChanges = {this.cancelAddOrEditProduct}
            cbEditProduct = {() => this.editProduct(product)}
            cbDeleteProduct = {this.deleteProduct}
            cbUpdateChangeStatus = {this.updateChangeStatus}
            />
          )}
      </div>
    );}}
export default Shop;