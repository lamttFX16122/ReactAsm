import React from "react";
import { Loading } from "./LoadingComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import {Link} from "react-router-dom";
function RenderMenuItem({ dish }) {
  return (
    <Card className="m-5">
      <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>
          <h5>{dish.name}</h5>
        </CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
  );
}

const MenuEx = (props) => {
  if(props.isLoading)
  {
    return(
      <div className="container">
        <div className="row">
          <Loading/>
        </div>
      </div>
    )
  }else if(props.errMes)
  {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMes}</h4>
        </div>
      </div>
    )
  }
  else{
  let menu = props.dishes.map((value, index) => {
    return (
      <div key={value.id} className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
        <RenderMenuItem
          dish={value}
        ></RenderMenuItem>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Menu
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>Menu</h3>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}
};

export default MenuEx;
