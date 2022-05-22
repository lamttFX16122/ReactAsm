import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MenuEx from "./MenuComponentEx1";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import * as action from "./../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeader();
  };
  render() {
    const DishWithID = ({ match }) => {
      return (
        <Dishdetail
          chooseDish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMes={this.props.dishes.errMes}
          comments={this.props.comments.comments.filter(
            (comm) => Number(comm.dishId) === parseInt(match.params.dishId)
          )}
          commentsErrMes={this.props.comments.errMes}
          postComment={this.props.postComment}
        ></Dishdetail>
      );
    };
    const Homepage = () => {
      return (
        <div>
          {this.props.dishes.dishes.length > 0 &&
            this.props.promotions.promotions.length > 0 &&
            this.props.leaders.leaders.length > 0 && (
              <Home
                dish={this.props.dishes.dishes.filter((dis) => dis.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMes={this.props.dishes.errMes}
                promotions={
                  this.props.promotions.promotions.filter(
                    (promo) => promo.featured
                  )[0]
                }
                promosLoading={this.props.promotions.isLoading}
                promosErrMes={this.props.promotions.errMes}
                leaders={
                  this.props.leaders.leaders.filter((lead) => lead.featured)[0]
                }
                leaderFailed={this.props.leaders.errMes}
                leaderLoading={this.props.leaders.isLoading}
              ></Home>
            )}
        </div>
      );
    };
    return (
      <div>
        <div className="App">
          <Header></Header>
        </div>

        <div className="container">
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch>
                <Route path="/home" component={Homepage}></Route>
                <Route
                  path="/about"
                  component={() => (
                    <About leaders={this.props.leaders.leaders}></About>
                  )}
                ></Route>
                <Route
                  exact
                  path="/menu"
                  component={() => (
                    <MenuEx
                      dishes={this.props.dishes.dishes}
                      isLoading={this.props.dishes.isLoading}
                      errMes={this.props.dishes.errMes}
                    ></MenuEx>
                  )}
                ></Route>
                <Route
                  exact
                  path="/menu/:dishId"
                  component={DishWithID}
                ></Route>
                <Route
                  path="/contact"
                  component={() => (
                    <Contact resetFeedback={this.props.resetFeedbackForm} 
                      postFeedback={this.props.postFeedback}
                    />
                  )}
                ></Route>
                <Redirect to="/home"></Redirect>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //Tra ve props cho component hay store

  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDishes: () => {
      dispatch(action.fetchDishes());
    },
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
    fetchComments: () => {
      dispatch(action.fetchComments());
    },
    fetchPromos: () => {
      dispatch(action.fetchPromos());
    },
    postComment: (dishId, rating, author, comment) => {
      dispatch(action.postComment(dishId, rating, author, comment));
    },
    fetchLeader: () => {
      dispatch(action.fetchLeader());
    },
    postFeedback: (
      firstName,
      lastName,
      contactTel,
      email,
      ckbContact,
      sltTel,
      feedBack
    ) => {
      dispatch(
        action.postFeedback(
          firstName,
          lastName,
          contactTel,
          email,
          ckbContact,
          sltTel,
          feedBack
        )
      );
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
