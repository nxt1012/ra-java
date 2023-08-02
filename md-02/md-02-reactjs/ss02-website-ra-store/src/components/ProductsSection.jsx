import React, { Component } from "react";

export default class ProductsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href="">
              <div className="product_box">
                <div className="product_img-box">
                  <img src={this.props.img} alt="" />
                  <span> Sale </span>
                </div>
                <div className="product_detail-box">
                  <span> {this.props.price} </span>
                  <p>Passage of Lorem Ipsum, you</p>
                </div>
              </div>
            </a>
    );
  }
}
