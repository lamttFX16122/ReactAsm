import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import  React,{ Component } from "react";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
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
         <Header></Header>
        </div>

        <div className="container">
          <MenuEx
            dishes={this.state.dishes}
            onReceiveDish={this.chooseDish}
          ></MenuEx>
          <Dishdetail chooseDish={this.state.dishes.filter((dish)=>dish.id===this.state.choosedishes)[0]}></Dishdetail>
        </div>
<Footer></Footer>
      </div>
    );
  }
}

export default Main;
