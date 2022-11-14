import React, { Component } from 'react';
import {Button,  Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class Company extends Component {
        constructor(props) {
          super(props);
          this.state = {
          isModalOpen: false,
          };
          this.toggleModal = this.toggleModal.bind(this);
          this.handleLogin = this.handleLogin.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        handleLogin(event) {
            alert(`Fullname: ${this.fullname.value} Phone: ${this.phone.value} Email: ${this.email.value} Date: ${this.date.value} Remember: ${this.remember.checked}`);
            this.toggleModal();
            event.preventDefault();
        }

        render() {
          return (

            <React.Fragment>
                <div className="container">
                    <div className="row ">
                        <div className="col Service-circle ">
                        <div outline onClick={this.toggleModal}><i className="fa fa-briefcase fa-lg"/><b> COMPANY</b></div>
                        </div>
                    </div>
                </div>
                <div className=" container modal">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{maxWidth: '2000px', width: '100%', height:'1000px'}} >
                        <ModalHeader toggle={this.toggleModal}><h3 className="modalContent">Company Formation</h3></ModalHeader>
                        <ModalBody>
                <div className="row modal-body">
                    <div className="col-sm-6 "> 
                        <img src="./assets/images/company.jpeg" alt="bg Logo" style={{maxwidth:"600px", width:"90%" , height:'90%'}}/> 
                    </div>
                    <div className="col-sm-6"> 
                        <h4> Opening your own business is exciting and exciting. It’s all that comes after the excitement and excitement that fades, which determines whether a small business will succeed or not.</h4>
                    </div>
                    </div>
                <div className="row modal-body">
                    <div className="col-lg-12"> 
                        <Form onSubmit={this.handleLogin}>Contact details:
                        <FormGroup>
                            <Label htmlFor="fullName"></Label>
                                <Input type="text" id="fullName" name="fullName" placeholder="Full Name"
                                    innerRef={input => this.fullName = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone"></Label>
                                <Input type="phone" id="phone" name="phone" placeholder="Phone"
                                    innerRef={input => this.phone= input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email"></Label>
                                <Input type="email" id="email" name="email" placeholder="Email"
                                    innerRef={input =>this.email= input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="age"></Label>
                                <Input type="age" id="age" name="age" placeholder="Your Age"
                                    innerRef={input =>this.date = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio"  name="remember"  style={{width:"20px", height:"20px"}} 
                                    innerRef={input => this.remember = input} />I agree that my submitted data is being collected and stored.
                            </Label>
                        </FormGroup>
                            <Button className="send-message mt-3" type="submit" color="secondary"> Submit
                            </Button>
                            <Button className="send-message1 mt-3 ml-2" type="cancel" value="cancel" color="secondary">Cancel</Button>
                        </Form>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
            </React.Fragment>
          );
      }
  }

export default Company;
