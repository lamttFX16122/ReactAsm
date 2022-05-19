import React, { Component } from "react";

import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  Label,
  ModalHeader,
  FormGroup,
} from "reactstrap";
import {Control, LocalForm,Errors } from 'react-redux-form'
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComment: false,
    };
  }
  toggleComment=()=>{
    this.setState({
      toggleComment:!this.state.toggleComment
    })
  }
  onSubmitComment=(values)=>{
    this.props.addComment(this.props.chooseDish.id, values.rating, values.author, values.comment)
    alert("Current state is: " +  JSON.stringify(values))

  }
   RenderDishDetail = ( dish ) => {
    if (dish === null || dish === undefined) {
      return <div className="row"></div>;
    } else {
      return (
        <Card className="m-5">
          <CardImg top src={baseUrl+dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <h4>{dish.name}</h4>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  };
   RenderComment = (comm) => {
     console.log(comm)
    if (comm === undefined || comm === null) {
      return <div className="row"></div>;
    } else {
      // console.log(comm)
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
          <Button className="w-50" onClick={this.toggleComment} outline>
                  <span className="fa-solid fa-pen fa-lg"></span> Submit Comment
         </Button>
        </Card>
      );
    }
  };
  render() {
    const required=(val)=>(val) && (val.length);
    const maxLength=(len)=>(val)=>(!val) ||(val.length<=len);
    const minLength=(len)=>(val)=>(val) && (val.length>=len);
   
    if(this.props.isLoading)
      {
        return(
          <div className="container">
            <div className="row">
              <Loading/>
            </div>
          </div>
        ) 
      }
      else if(this.props.errMes)
      {
        return(
          <div className="container">
            <div className="row">
              <h4>{this.props.errMes}</h4>
            </div>
          </div>
        )
      }
      else if(this.props.chooseDish!==null)
      {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{this.props.chooseDish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h4>Detail</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                {/* <RenderDishDetail dish={this.props.chooseDish}></RenderDishDetail> */}
                {this.RenderDishDetail(this.props.chooseDish)}
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  {/* <RenderComment comm={this.props.comment}></RenderComment> */}
                  {this.RenderComment(this.props.comments)}
                  {/* {console.log(this.props.comments)} */}
              </div>
            </div>
            <div className="row">
              {/* Modal */}
              <Modal isOpen={this.state.toggleComment} toggle={this.toggleComment}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(values)=>{this.onSubmitComment(values)}}>
                  <FormGroup>
                      <Label>Rating</Label>
                      <Control.select className="form-select"
                        aria-label="Default select example"
                        model=".rating"
                        name="rating"       
                      >
                         <option value={1}>1 </option> 
                         <option value={2}>2 </option> 
                         <option value={3}>3</option> 
                         <option value={4}>4</option> 
                         <option value={5}>5</option> 
                      </Control.select>
                     
                    </FormGroup>
                    <FormGroup>
                      <Label>Your Name</Label>
                      <Control.text className="form-control"
                        model=".author"
                        name="author"
                        validators={{
                          required,
                          minLength:minLength(3),
                          maxLength:maxLength(15)
                        }}
                      />
                      <Errors className="text-danger"
                          model=".author"
                          show="touched"
                          messages={{
                            required:"Required | ",
                            minLength:"Must be greater than 2 characters | ",
                            maxLength:"Must be 15 characters or less"
                          }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Comment</Label>
                      <Control.textarea className="form-control"
                        model=".comment"
                        name="comment"
                        rows="6"
                      />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                  </LocalForm>
                 
                </ModalBody>
              </Modal>
            </div>
          </div>
        );
      }
  
  }
}
export default DishDetail;
