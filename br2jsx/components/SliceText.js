import React from 'react';
import PropTypes from 'prop-types';

import BR2JSX from './BR2JSX';

class SliceText extends React.Component {

  render() {
    let firstText="первый<br>второй<br/>третий<br />последний";
    return <BR2JSX text={firstText}/>;
  }

}

export default SliceText;
