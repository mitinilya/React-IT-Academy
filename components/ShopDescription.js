import React from "react";
import "./ShopDescription.css";

class ShopDescription extends React.Component {
  render() {
    return (
      <div className="ShopDescriptionTitle">
        <span className="ShopDescriptionTitle_name">{this.props.name}</span>
        <span className="ShopDescriptionTitle_count">{this.props.count} шт.</span>
        <span className="ShopDescriptionTitle_img">
          <img src={this.props.url_photo} />
        </span>
        <span className="ShopDescriptionTitle_price">{this.props.price} $</span>
      </div>
    );
  }
}

export default ShopDescription;
