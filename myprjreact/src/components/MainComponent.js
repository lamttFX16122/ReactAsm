import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
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
        choosedishes: dishID,
      });
    }
  };
  render() {
    const Homepage = () => {
      return <Home></Home>;
    };
    return (
      <div>
        <div className="App">
          <Header></Header>
        </div>

        <div className="container">
          <Switch>
            <Route path="/home" component={Homepage}></Route>
            <Route
            exact
              path="/menu"
              component={() => 
                <MenuEx dishes={this.state.dishes} onReceiveDish={this.chooseDish}></MenuEx>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
          <Dishdetail
            chooseDish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.choosedishes
              )[0]
            }
          ></Dishdetail>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
