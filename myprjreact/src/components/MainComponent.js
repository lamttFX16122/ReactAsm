import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      choosedishes: null,
    };
  }
  chooseDish = (dishID) => {
    if (dishID != null) {
      this.setState({
        choosedishes:dishID
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
          <Dishdetail chooseDish={this.state.dishes.filter((dish)=>dish.id===this.state.choosedishes)[0]}></Dishdetail>
        </div>
      </div>
    );
  }
}

export default Main;
