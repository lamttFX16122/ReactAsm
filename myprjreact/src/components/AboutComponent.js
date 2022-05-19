import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  function ReaderLeaderBootstrap({ leader }) {
    return (
      <div className="card mb-3" max-width="540px">
        <div className="row g-0">
          <div className="col-md-1 mt-4">
            <img
              src={leader.image}
              alt={leader.name}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-11">
            <div className="card-body">
              <h4 className="card-title">{leader.name}</h4>
              <p className="card-text">{leader.designation}</p>
              <p className="card-text">{leader.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // function RenderLeader({ leader }) {
  //   return (
  //     <Card className="mt-2">
  //       <div className="row">
  //         <div className="col-2">
  //           <CardImg
  //             className="m-4"
  //             width="50%"
  //             height="60%"
  //             src={leader.image}
  //             alt={leader.name}
  //           />
  //         </div>
  //         <div className="col-10">
  //           <CardBody>
  //             <CardTitle>
  //               <h4>{leader.name}</h4>
  //             </CardTitle>
  //             <CardText>
  //               <p>{leader.designation}</p>
  //             </CardText>
  //             <CardText>
  //               <p>{leader.description}</p>
  //             </CardText>
  //           </CardBody>
  //         </div>
  //       </div>
  //     </Card>
  //   );
  // }s

  const leaders = props.leaders.map((leader) => {
    return <ReaderLeaderBootstrap key={leader.id} leader={leader}></ReaderLeaderBootstrap>;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
            Peter Pan, that featured for the first time the world's best
            cuisines in a pan.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <div className="row">
                  <p className="mb-0">
                    You better cut the pizza in four pieces because I'm not
                    hungry enough to eat six.
                  </p>
                </div>
                <footer className="blockquote-footer row">
                  Yogi Berra,{" "}
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <Media list>{leaders}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;
