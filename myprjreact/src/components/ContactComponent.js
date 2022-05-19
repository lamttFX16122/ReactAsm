import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Control,Form,Errors,actions } from 'react-redux-form'
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      contactTel: "",
      email: "",
      ckbContact: false,
      sltTel: "Tel.",
      feedBack: "",
      touched: {
        firstName: false,
        lastName: false,
        contactTel: false,
        email: false,
      },
    };
  }
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (values) => {
    // e.preventDefault();
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.props.resetFeedback();
    console.log(values)
  };
  onBlur = (field) => (e) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true,
        // touched: { ...this.state.touched, [field]: true }
      },
    });
  };

  validate = (firstName, lastName, contactTel, email) => {
    const { touched } = this.state;
    const err = {
      firstName: "",
      lastName: "",
      contactTel: "",
      email: "",
    };
    // first name
    // console.log(touched);
    if (touched.firstName && firstName.length < 3)
      err.firstName = "First Name should be >=3 characters";
    else if (touched.firstName && firstName.length > 10)
      err.firstName = "First Name should be <=10 characters";

    // last name
    if (touched.lastName && lastName.length < 3)
      err.lastName = "Last Name should be >=3 characters";
    else if (touched.lastName && lastName.length > 10)
      err.lastName = "Last Name should be <=10 characters";

    // contactTel
    const reg = /^\d+$/;
    if (touched.contactTel && !reg.test(contactTel))
      err.contactTel = "Tel. Number should contain only numbers";

    //email
    var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (touched.email && !regEmail.test(email))
      err.email = "Invalid email address";
    return err;
  };

  render() {
    const { firstName, lastName, contactTel, email } = this.state;
    const err = this.validate(firstName, lastName, contactTel, email);
    //Variable Validate
    const required=(val)=>(val) && (val.length);
    const maxLength=(len)=>(val)=>(!val) ||(val.length<=len);
    const minLength=(len)=>(val)=>(val) && (val.length>=len);
    const isNumber=(val)=>(!isNaN(Number(val)));
    const validEmail=(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact</h3>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        {/* Form */} 

        <div className="container w-75">
          <div className="row mt-5 mb-5">
            <hr />
            <h1>Send us Your Feedback</h1>
            {/* <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className={
                    err.firstName === ""
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  name="firstName"
                  onBlur={this.onBlur("firstName")}
                  onChange={this.onChange}
                />
                <div className="invalid-feedback">{err.firstName}</div>

                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className={
                    err.lastName === ""
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  name="lastName"
                  onBlur={this.onBlur("lastName")}
                  onChange={this.onChange}
                />
                <div className="invalid-feedback">{err.lastName}</div>
                <label className="form-label">Contact Tel</label>
                <input
                  type="text"
                  className={
                    err.contactTel === ""
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  name="contactTel"
                  onBlur={this.onBlur("contactTel")}
                  onChange={this.onChange}
                />
                <div className="invalid-feedback">{err.contactTel}</div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={
                    err.email === ""
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  name="email"
                  onBlur={this.onBlur("email")}
                  onChange={this.onChange}
                />
                <div className="invalid-feedback">{err.email}</div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="ckbContact"
                      value={this.state.ckbContact}
                      onChange={this.onChange}
                    />
                    <label className="form-check-label">
                      May we contact you?
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="sltTel"
                    value={this.state.sltTel}
                    onChange={this.onChange}
                  >
                    <option value={"Tel."}>Tel.</option>
                    <option value={"Email"}>Email</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your Feedback</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="feedBack"
                  onChange={this.onChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Feedback
              </button>
            </form> */}
             <Form model="feedback" onSubmit={(values)=>{this.onSubmit(values)}}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <Control.text
                model=".firstName" 
                  className="form-control"
                  name="firstName"  
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}               
                />
               <Errors className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required:"Required | ",
                    minLength:"Must be greater than 2 characters | ",
                    maxLength:"Must be 15 characters or less"
                  }}
               />

                <label className="form-label">Last Name</label>
                <Control.text
                  model=".lastName"
                  className="form-control"
                  name="lastName"   
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}                           
                />
                  <Errors className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required:"Required | ",
                    minLength:"Must be greater than 2 characters | ",
                    maxLength:"Must be 15 characters or less"
                  }}
               />
          
                <label className="form-label">Contact Tel</label>
                <Control.text
                  model=".contactTel"
                  className="form-control"
                  name="contactTel"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber
                  }}     
                />
                 <Errors className="text-danger"
                  model=".contactTel"
                  show="touched"
                  messages={{
                    required:"Required | ",
                    minLength:"Must be greater than 2 characters | ",
                    maxLength:"Must be 15 characters or less | ",
                    isNumber:"Must be a number"
                  }}
               />
                <div className="invalid-feedback">{err.contactTel}</div>
                <label className="form-label">Email</label>
                <Control.text
                  model=".email"
                  className="form-control"
                  name="email"
                  validators={{
                    required,
                    validEmail
                  }}
                />
                <Errors className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required:"Required | ",
                    validEmail:"Invalid Email Address"
                  }}
                />
                <div className="invalid-feedback">{err.email}</div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div className="mb-3 form-check">
                    <Control.checkbox
                      model=".ckbContact"
                      className="form-check-input"
                      name="ckbContact"
                      value={this.state.ckbContact}
                    />
                    <label className="form-check-label">
                      May we contact you?
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <Control.select
                    model=".sltTel"
                    className="form-select"
                    aria-label="Default select example"
                    name="sltTel"
                  >
                    <option value={"Tel."}>Tel.</option>
                    <option value={"Email"}>Email</option>
                  </Control.select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your Feedback</label>
                <Control.textarea
                  model=".feedBack"
                  className="form-control"
                  rows="3"
                  name="feedBack"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Feedback
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;