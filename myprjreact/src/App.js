import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
import React,{Component} from "react";
import MenuEx from "./components/MenuComponentEx1";
import Dishdetail from "./components/DishdetailComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      choosedishes: null,
    };
  }
  chooseDish = (dish) => {
    if (dish != null) {
      this.setState({
        choosedishes: dish,
      });
    }
  };
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

        <div className="container">
          <MenuEx
            dishes={this.state.dishes}
            onReceiveDish={this.chooseDish}
          ></MenuEx>
          <Dishdetail chooseDish={this.state.choosedishes}></Dishdetail>
        </div>
      </div>
    );
  }
}

export default App;
