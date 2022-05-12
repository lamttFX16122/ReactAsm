import React, { Component } from "react";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";

import {connect} from "react-redux";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: this.props.dishes,
      comments:this.props.comments,
      promotions:this.props.promotions,
      leaders:this.props.leaders
      // about:ABOUT
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
    const DishWithID=({match})=>{
      console.log(this.state.comments.filter((comm)=>comm.dishId === parseInt(match.params.dishId))[0])
      return(
        <Dishdetail chooseDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                    comment={this.state.comments.filter((comm)=>comm.dishId === parseInt(match.params.dishId))}
        ></Dishdetail>
      )
    }
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
            <Route path="/about" component={()=>(<About leaders={this.state.leaders}></About>)}></Route>
            <Route
              exact
              path="/menu"
              component={() => (
                <MenuEx
                  dishes={this.state.dishes}
                  onReceiveDish={this.chooseDish}
                ></MenuEx>
              )}></Route>
              <Route exact path="/menu/:dishId" component={DishWithID}></Route>
              <Route path="/contact" component={Contact}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = state => { //Tra ve props cho component hay store
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
export default withRouter(connect(mapStateToProps)(Main));
