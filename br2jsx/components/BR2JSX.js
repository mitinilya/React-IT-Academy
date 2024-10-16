import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    
    render(){
        let sliceText = this.props.text.split(/<br\s*\/?>/);
        return (
            <div className="br2jsx">
            {sliceText.reduce((acc, text, index) => {
                    if (index !== 0) acc.push(<br key={index} />); //знаю что не
                    //  самый лучший вариант использовать index для key но к сожалению ничего другого не пришло в голову:(
                    acc.push(text);
                    return acc;
                }, [])}
            </div>
        );
    }
}

export default BR2JSX;