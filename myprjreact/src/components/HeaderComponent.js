import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalBody,
  Label,
  ModalHeader,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModal:false
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  toggleModal=()=>{
    this.setState({
      isModal: !this.state.isModal
    });
  }
  onSubmit=(e)=>{
    this.toggleModal();
    e.preventDefault();
    console.log("UserName: "+this.username.value+ " Password: "+this.password.value +" Remember: "+this.remember.checked)

  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <div className="container d-flex flex-row flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
            <div>
              <NavbarToggler
                onClick={this.toggleNav}
                className="mr-3"
              ></NavbarToggler>
              <NavbarBrand href="/">
                <img
                  src="assets/images/logo.png"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>
            </div>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="text-left">
                  <NavLink className="nav-link text-info" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem className="text-left">
                  <NavLink className="nav-link text-info" to="/about">
                    <span className="fa fa-info fa-lg"></span> About
                  </NavLink>
                </NavItem>
                <NavItem className="text-left">
                  <NavLink className="nav-link text-info" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem className="text-left">
                  <NavLink className="nav-link text-info" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.toggleModal} outline>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="jumbotron">
          <div className="container">
            <div className="row rowheader">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
          <ModalHeader>
            Login
          </ModalHeader>
          <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label>Username</Label>
                  <Input type="text" name="username" innerRef={(input)=>this.username=input}></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="password" name="password" innerRef={(input)=>this.password=input}></Input>
                </FormGroup>
                <FormGroup check>
                  <Label><Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}></Input> Remember me</Label>
                </FormGroup>
                <FormGroup className="text-right">
                  <Button  type="sumit" color="primary">Login</Button>
                </FormGroup>
              </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
