import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';

class RainbowText extends React.Component {


  render() {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    
    return (
      <div>
        <RainbowFrame colors = {colors}>
          <p style={{textAlign: "center", fontWeight: "bold", fontSize: "44px"}}>Hello</p>
        </RainbowFrame>
      </div>
    )

  }

}

export default RainbowText;
