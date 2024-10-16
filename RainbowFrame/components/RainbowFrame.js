import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    let content = this.props.children;
    for (let color of this.props.colors){
      content = (
        <div
          style={{border: `solid 10px ${color}`,
            padding: "10px",
            margin: "5px"
          }}
        >
          {content}
        </div>
      );
    };

    return <div>{content}</div>;
  }
}

export default RainbowFrame;
