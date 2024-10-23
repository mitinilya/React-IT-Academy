import React from 'react';
import PropTypes from 'prop-types';

import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';
class RainbowFrameHOC extends React.Component {
 

  render() {
    let caption1 = "однажды";
    let caption2 = "пору";
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
    return (
      <div>
        <div>
        <DoubleButton
        caption1 = {caption1}
        caption2 = {caption2}
        cbPressed = {num => alert(num)}>
         в студеную зимнюю
        </DoubleButton>
        </div>
        <div>
          <FramedDoubleButton
          caption1 = "я из лесу"
          caption2 = "мороз"
          cbPressed = {num => alert(num)}>
          вышел, был сильный
          </FramedDoubleButton>
        </div>
      </div>
    )

  }

}

export default RainbowFrameHOC;
