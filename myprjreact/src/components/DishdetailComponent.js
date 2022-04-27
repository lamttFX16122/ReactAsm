import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class Dishdetail extends Component {
  render() {
    if (this.props.chooseDish == null) {
      return <div className="row"></div>;
    } else {
      let comment = this.props.chooseDish.comments.map((value, index) => {
        return (
          <CardBody key={value.id}>
            <CardText>{value.comment}</CardText>
            <CardText>{"--" + value.author + " ," + value.date}</CardText>
          </CardBody>
        );
      });
      return (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <Card className="m-5">
              <CardImg
                top
                src={this.props.chooseDish.image}
                alt={this.props.chooseDish.name}
              />
              <CardBody>
                <CardTitle>
                  <h4>{this.props.chooseDish.name}</h4>
                </CardTitle>
                <CardText>{this.props.chooseDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <Card className="m-5 p-3">
              <CardTitle>
                <h4>{"Comments"}</h4>
              </CardTitle>
              {comment}
            </Card>
          </div>
        </div>
      );
    }
  }
}
export default Dishdetail;
