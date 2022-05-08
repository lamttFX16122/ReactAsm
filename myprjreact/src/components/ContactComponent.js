import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
class Contact extends Component {
    constructor(props) {
    	super(props);
        this.state={
            firstName:"",
            lastName:"",
            contactTel:"",
            email:"",
            ckbContact:false,
            sltTel:"Tel.",
            feedBack:''
        }
    }
    onChange=(e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.type==="checkbox"? target.checked: target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("Current state is: "+JSON.stringify(this.state));
        alert("Current state is: "+JSON.stringify(this.state));
    }
  render() {
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
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" onChange={this.onChange}/>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" onChange={this.onChange}/>
                <label className="form-label">Contact Tel</label>
                <input type="text" className="form-control" name="contactTel" onChange={this.onChange}/>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={this.onChange}/>
              </div>
              <div className="row">
                <div className="col-10">
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" name="ckbContact" value={this.state.ckbContact} onChange={this.onChange}/>
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
                    value={this.state.sltTel} onChange={this.onChange}
                  >
                    <option value={"Tel."}>Tel.</option>
                    <option value={"Email"}>Email</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label  className="form-label">
                 Your Feedback
                </label>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
