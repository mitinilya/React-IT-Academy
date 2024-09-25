import React from 'react';

import './Shop.css';

class Shop extends React.Component {

  render() {
    return (
      <div className='Shop'>
        <span className='Shop_Text'>
          {this.props.name}
        </span>
        <p className = 'Shop_Address'>
          {this.props.address}
        </p>
      </div>
    );
  }

}

export default Shop;
