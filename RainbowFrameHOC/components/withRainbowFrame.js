import React from 'react';

function withRainbowFrame(colors) {
    return function(Comp) {
      return props => {
        let content = <Comp{...props}/>;
        for (let color of colors){
          content = <div style={{border: `solid 10px ${color}`, padding: "10px", margin: "5px"}}>{content}</div>
        };
        return content;
};
};
}



export { withRainbowFrame};
