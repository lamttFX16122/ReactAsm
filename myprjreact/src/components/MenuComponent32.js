import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class MenuComponent32 extends Component {

changeState=dishID=>{
  console.log(dishID.id) 
    this.props.onReceiveDish(dishID)
  };
  renderDishEventOnclick = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  };
  render() {
    // vong lap Dish duoc truyen tu App.js
    let menu = this.props.dishes.map((value, index) => {
      return (
        <div key={value.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=>this.changeState(value)}>
            <CardImg width="100%" src={value.image} alt={value.name} />
            {/*image*/}
            <CardImgOverlay>
              <CardTitle>{value.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* {
          this.renderDishEventOnclick(this.state.selectedDish)
        } */}
        <div className="row">
          <div className="col-12 col-md-5 m-1">{}</div>
        </div>
      </div>
    );
  }
}
export default MenuComponent32;
