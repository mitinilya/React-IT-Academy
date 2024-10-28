import React from 'react';
import "./ViewProduct.css"



class ViewProduct extends React.Component {
 render() {
    if (!this.props.prod){
        return <div>Выберите продукт для просмотра</div>;
    }
    return (
       
        <div className='SelectProduct'>
            <p className="SelectPrTitle">Вы выбрали:</p>
            <p>{this.props.prod.name}</p>
            <p>{this.props.prod.price} $</p>
            <div className='SelectPhoto'>
                <img src = {this.props.prod.url_photo} />
            </div>
        </div>
    )
 }
}
export default ViewProduct;
