import React, { Component } from "react";

class Product extends Component {
    addToCard=()=>{
        alert(this.props.name + " - " +this.props.price+" VNĐ");
    }
  render() {
    return (
      <div key={this.props.id} className="col col-4">
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src={this.props.urlImage}
            alt={this.props.name}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.price}</p>
            <button className="btn btn-danger" onClick={this.addToCard }>Mua ngay</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
