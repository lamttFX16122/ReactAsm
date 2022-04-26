// import logo from './logo.svg';
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent32";
import { DISHES } from "./shared/dishes";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
        </div>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
