import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import {FadeTransform} from "react-animation-components"

function RenderCard({ item, isLoading, isMes }) {
  if (isLoading) {
    return <Loading />;
  } else if (isMes) {
    return <h4>{isMes}</h4>;
  } else {
    return (
     <FadeTransform in transformProps={{
       exitTransform:'scale(0,5) translateY(-50%)'
     }}>
        <Card>
        <CardImg src={baseUrl+item.image} alt={item.name}></CardImg>
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
     </FadeTransform>
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
          <RenderCard item={props.promotions}
              isLoading={props.promosLoading}
              errMes={props.promosErrMes}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}
export default Home;
