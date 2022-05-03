import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import {Link} from "react-router-dom";

function RenderDishDetail({dish}) {
    if (dish == null || dish==undefined) {
      return <div className="row"></div>;
    } else {
      return (
            <Card className="m-5">
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>
                  <h4>{dish.name}</h4>
                </CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
      );
    }
  }

function RenderComment({comm}) {
  if(comm==undefined||comm==null)
  {
    return <div className="row"></div>;
  }
  else
  {
    let comment = comm.map((value) => {
      return (
        <CardBody key={value.id}>
          <CardText>{value.comment}</CardText>
          <CardText>
            {"--" +
              value.author +
              ", " +
              moment(value.date).format("MMM Do, YYYY")}
          </CardText>
        </CardBody>
      );
    });
    return (
      <Card className="m-5 p-3">
        <CardTitle>
          <h4>{"Comments"}</h4>
        </CardTitle>
        {comment}
      </Card>
    );
  }
}
const Dishdetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {props.chooseDish.name}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <RenderDishDetail dish={props.chooseDish}></RenderDishDetail>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <RenderComment comm={props.comment}></RenderComment>
          </div>
    
    </div>
    </div>
  );
};
export default Dishdetail;
