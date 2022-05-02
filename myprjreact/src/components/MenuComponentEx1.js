import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({ dish, onReceiveDish }) {
  return (
    <Card className="m-5"> {/*onClick={() => onReceiveDish(dish.id)}>*/}
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>
          <h5>{dish.name}</h5>
        </CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const MenuEx = (props) => {
  let menu = props.dishes.map((value, index) => {
    return (
      <div key={value.id} className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
        <RenderMenuItem
          dish={value}
          onReceiveDish={props.onReceiveDish}
        ></RenderMenuItem>
      </div>
    );
  });
  return <div className="row">{menu}</div>;
};

export default MenuEx;
