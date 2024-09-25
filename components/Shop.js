import React from 'react';

import './Shop.css';

class Warning extends React.Component {

  render() {
    return (
      <div className='Warning'>
        <span className='Warning_Text'>
          {this.props.name},
          {this.props.address}
        </span>
      </div>
    );
  }

}

export default Warning;
