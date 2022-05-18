import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, isMes }) {
  if (isLoading) {
    return <Loading />;
  } else if (isMes) {
    return <h4>{isMes}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={item.image} alt={item.name}></CardImg>
        <CardBody>
          <CardTitle>
            <h4>{item.name}</h4>
          </CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            isMes={props.dishesErrMes}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}
export default Home;
