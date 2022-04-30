import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class MenuEx extends Component {
  onClickCard = (dishID) => {
    this.props.onReceiveDish(dishID);
  };
  render() {
    let menu = this.props.dishes.map((value, index) => {
      return (
        <div key={value.id} className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <Card className="m-5" onClick={()=>{this.onClickCard(value.id)}}>
            <CardImg width="100%" src={value.image} alt={value.name} />
            <CardImgOverlay>
              <CardTitle> <h5>{value.name}</h5> </CardTitle>
            </CardImgOverlay>
          </Card>
         </div>
      );
    });
    return (
        <div className="row">{menu}</div> 
    );
  }
}
export default MenuEx;
