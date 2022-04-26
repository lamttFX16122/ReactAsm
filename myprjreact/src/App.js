import "./App.css";
import { FormText, Navbar, NavbarBrand } from "reactstrap";
import Product from "./components/product";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        name: "Iphone XS Pro Max",
        price: "14.000.000",
        url: "https://icon2.cleanpng.com/20190606/ace/kisspng-apple-iphone-xs-max-iphone-xr-iphone-6-64-gb-electronics-apple-iphone-xs-max-512-gb-gold-eu-o-5cf9c12e72eb51.9838274815598717904707.jpg",
        status: false,
      },
      {
        id: 2,
        name: "Iphone 11 Pro Max",
        price: "16.000.000",
        url: "data:image/jpeg;base64,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",
        status: true,
      },
      {
        id: 3,
        name: "Iphone 12 Pro Max",
        price: "18.000.000",
        url: "https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-2.png",
        status: true,
      },
      {
        id: 4,
        name: "Iphone 13 Pro Max",
        price: "20.000.000",
        url: "https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg",
        status: true,
      },
    ];
  }
  showText = () => {
    alert(this.refs.txt_search.value);
  };
  render() {
    var element = this.state.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            urlImage={product.url}
          ></Product>
        );
      }
      return result;
    });
    return (
      <div>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
        </div>
        <div className="row w-50 mx-auto p-2">
          <div className="col-12">
            <input type="text" className="input" ref="txt_search" />
            <button
              type="button"
              className="btn-primary"
              onClick={this.showText}
            >
              Search
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">{element}</div>
        </div>
      </div>
    );
  }
}
export default App;
