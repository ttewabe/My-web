import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';

class Support extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            fullName: '',
            phoneNum: '',
            email: '',
            subject:'',
            message: '',
            agree: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        
        event.preventDefault();
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Fullname: ${this.fullname.value} Phone: ${this.phone.value} Email: ${this.email.value} Date: ${this.date.value} Agree: ${this.agree.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
            
        return (
            <div className="container ">
                <div className="row row-content align-items-center ">
                    <div className="col ml-2">
                        <h2 className="breadCrumb1 send message">Request a Free Consultation</h2>
                        <h4>Whatever your insurance coverage needs are, we're here to help life go right.Get a quote or talk to an agent.</h4>
                    </div>
                </div>
                <div className="row card-container">
                <div className="col-md-6 mt-5">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="fullName" md={1}></Label>
                            <Col md={11}>
                                <Input className="text-message"  type="text" id="fullName" name="fullName"
                                    placeholder="Full Name"
                                    value={this.state.fullName}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={1}></Label>
                            <Col md={11}>
                                <Input className="text-message"  type="tel" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    value={this.state.phoneNum}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={1}></Label>
                            <Col md={11}>
                                <Input className="text-message"  type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="subject" md={1}></Label>
                            <Col md={11}>
                                <Input className="text-message"  type="text" id="subject" name="subject"
                                    placeholder="subject"
                                    value={this.state.subject}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={1}></Label>
                            <Col md={11}>
                                <Input type="textarea" id="message" name="message"
                                    rows="12"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 11, offset: 1}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange} /> I agree that my submitted data is being collected and stored.
                                </Label>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 11, offset: 1}}>
                                <Button className="send-message" type="submit">
                                    SEND MESSAGE
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-md-6 mt-5 mb-0">
                    <img src="./assets/images/fin2.jpeg" height="520" width="600" alt="bg Logo" />
                </div>
            </div> 
        
            <div className="row card-container">
                <div className="col  mt-5">
                    <Card>
                        <CardHeader className="cardHeader ml-2" ><h2 className="tableCell1">Price Table</h2><h4>Like any combo, your home and auto insurance policies belong together.</h4></CardHeader>
                            <CardBody>
                                <dl className="row support-table" >
                                    <dt className="col-3 tableCell">BRONZE</dt> <dt className="col-3 tableCell">SILVER</dt> <dt className="col-3 tableCell">GOLD</dt> <dt className="col-3 tableCell">PREMIUM</dt>
                                    <dd className="col-3">$120/ Monthly</dd> <dd className="col-3">$200/ Monthly</dd> <dd className="col-3">$350/ Monthly</dd> <dd className="col-3">$500/ Monthly</dd>
                                    <dd className="col-3">$250 Setup Charges</dd> <dd className="col-3">$250 Setup Charges</dd> <dd className="col-3">No Setup Charges</dd> <dd className="col-3">No Setup Charges</dd>
                                    <dd className="col-3">Monthly Online Book- keeping </dd><dd className="col-3">Monthly Online Book- keeping</dd> <dd className="col-3">Monthly Online Book- keeping</dd> 
                                    <dd className="col-3">Monthly Online Book- keeping</dd>   

                                    <dd className="col-3">One Account</dd><dd className="col-3">One Account</dd><dd className="col-3">One Account</dd><dd className="col-3">Two Account</dd>
                                    
                                    <dd className="col-3">Upto 30 Transaction</dd><dd className="col-3">Upto 50 Transaction</dd><dd className="col-3">Upto 120 Transaction</dd><dd className="col-3">Unlimited Transaction</dd>

                                    <dd className="col-3">-</dd><dd className="col-3">-</dd><dd className="col-3">Payroll Upto 5 Employees</dd><dd className="col-3">Payroll Upto 5 Employees</dd>

                                    <dd className="col-3 send-message2" ><h5 outline onClick={this.toggleModal} >GET THIS PLAN</h5></dd>
                                    <dd className="col-3 send-message2" ><h5 outline onClick={this.toggleModal} >GET THIS PLAN</h5></dd>
                                    <dd className="col-3 send-message2" ><h5 outline onClick={this.toggleModal} >GET THIS PLAN</h5></dd>
                                    <dd className="col-2 send-message2" ><h5 outline onClick={this.toggleModal} >GET THIS PLAN</h5></dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className=" container modal">
                    <Modal className="my-modal1" isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg" style={{maxWidth: '2000px', width: '100%', height:'1000px'}}>
                        <ModalHeader toggle={this.toggleModal} className="modalContent">GET THIS PLAN</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input type="text" id="fullName" name="fullName"
                                            innerRef={input => this.fullName = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="bill">Billing Address</Label>
                                        <Input type="bill" id="bill" name="bill"
                                            innerRef={input => this.bill = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="city">City</Label>
                                        <Input type="city" id="city" name="city"
                                            innerRef={input => this.city = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="state">State and Zip Code</Label>
                                        <Input type="state" id="state" name="state"
                                            innerRef={input => this.state= input} />
                                    </FormGroup>
                                    <FormGroup>
                                    <span>
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input type="phone" id="phone" name="phone"
                                            innerRef={input => this.phone= input} />
                                            </span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email"
                                            innerRef={input =>this.email= input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="amount">amount</Label>
                                        <Input type="amount" id="amount" name="amount"
                                            innerRef={input =>this.amount= input} />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio"  name="remember"
                                            innerRef={input => this.remember = input} />I agree that my submitted data is being collected and stored.
                                        </Label>
                                    </FormGroup>
                                        <Button className="send-message mt-3 mr-2" type="submit">
                                        Submit </Button>
                                        <Button className="send-message1 mt-3" type="cancel " value="cancel" >Cancel</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
    }
}


export default Support;