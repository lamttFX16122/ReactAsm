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
import * as action from "./../redux/ActionCreators"
import { actions } from "react-redux-form";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  componentDidMount=()=>{
    this.props.fetchDishes();
  }

  
  render() {
    const DishWithID=({match})=>{
      return(
        <Dishdetail chooseDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMes={this.props.dishes.errMes}
                    comment={this.props.comments.filter((comm)=>comm.dishId === parseInt(match.params.dishId))}
                    addComment={this.props.addComment}
        ></Dishdetail>
      )
    }
    const Homepage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dis)=>dis.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMes={this.props.dishes.errMes}
              promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
              leader={this.props.leaders.filter((lead)=>lead.featured)[0]}>
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
            <Route path="/about" component={()=>(<About leaders={this.props.leaders}></About>)}></Route>
            <Route
              exact
              path="/menu"
              component={() => (
                <MenuEx
                  dishes={this.props.dishes.dishes}
                  isLoading={this.props.dishes.isLoading}
                  errMes={this.props.dishes.errMes}
                ></MenuEx>
              )}></Route>
              <Route exact path="/menu/:dishId" component={DishWithID}></Route>
              <Route path="/contact" component={()=><Contact resetFeedback={this.props.resetFeedbackForm}/>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = state => { //Tra ve props cho component hay store
  console.log(state.dishes.dishes)
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    
    addComment: (dishId, rating, author, comment) => {
      dispatch(action.AddComment(dishId, rating,author,comment));
    },
    fetchDishes: ()=>{
      dispatch(action.fetchDishes());
    },
    resetFeedbackForm:()=>{
      dispatch(actions.reset('feedback'))
    }

  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
