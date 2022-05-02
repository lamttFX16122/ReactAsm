import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      choosedishes: null,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
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
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((lead)=>lead.featured)[0]}>
        </Home>
      )
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
              component={() => (
                <MenuEx
                  dishes={this.state.dishes}
                  onReceiveDish={this.chooseDish}
                ></MenuEx>
              )}></Route>
              <Route path="/contact" component={Contact}></Route>
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
