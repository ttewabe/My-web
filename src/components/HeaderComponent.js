import React, { Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOneOpen: false,
            likeList:'',
            value: '1',
            show: 'false'
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalOne = this.toggleModalOne.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setShow = this.setShow.bind(this);
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
    toggleModalOne() {
        this.setState({
            isModalOneOpen: !this.state.isModalOneOpen
        });
    }
    
    setShow(){
            this.setState(state =>({ show:!state.show }))
        }
    handleLogin(event) {
        alert(`Fullname: ${this.fullname.value} Phone: ${this.phone.value} Email: ${this.email.value} Date: ${this.date.value} Remember: ${this.remember.checked} Age: ${this.age.value}`);
        this.toggleModal();
        event.preventDefault();
        this.toggleModalOne();
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
   
    renderLikeList = () =>{
        return (
            <div className="likes__list" >
                <ul className="unlist-modal">
                    <li><Link to="/contact" style={{color:"white"}} > Remote Support</Link></li>
                    <li outline onClick={this.toggleModalOne} style={{color:"white"}} >Get Information</li>
                    <li><Link to="/support" style={{color:"white"}} >Free Consultation</Link></li> 
                </ul>            
            </div>
        )
        }
        handleLeave=()=>{
            return this.setState({likeList:''})
        }
        handleHover=()=>{
            return this.setState({likeList:this.renderLikeList()})
        }
        componentDidMount(){
            console.log(this.state.show)
        }
    render() {
        return (
            <React.Fragment>
               
                <Navbar dark sticky="top" expand="md">
                    <div className="container" style={{color:"black"}}>
                        <NavbarBrand className="img-logo" href="/"><img src="./assets/images/logo1.png" style={{maxWidth: '90px', width: '100%', height:'60px'}}/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} style={{color:"blue"}} /> 
                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar >
                                <NavItem>
                                    <NavLink className="nav-link" exact to="/home" style={{color:"white"}}> <b>About</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/service" style={{color:"white"}}><b>Services</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link likes__wrapper" to="/support" >
                                    <div className="likes__relavance" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave} style={{color:"white"}}><b>Support</b>{this.state.likeList}</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact" style={{color:"white"}}> <b>Contact </b>  
                                    </NavLink>
                                </NavItem> 
                                </Nav>
                            </Collapse>
                            <Button  outline onClick={this.toggleModal} className="appointment">Appointment
                            </Button>
                        </div>
                    </Navbar> 
                    <div className="container">
                    <div className="row title-brand">
                        <div  className="col-6 col-md-6 d-none d-sm-block  title-brand" style={{color:"black"}}>
                            <a role="button" style={{color:"black"}} href="https://goo.gl/maps/ajVffTAjKnXZpPqZA" target="_blank"><i className="fas fa fa-map-marker fa-lg" style={{color:"olivedrab"}}/> Location | </a>
                            <h8><i className="fa fa-clock-o fa-lg"/> Mon-Fri{":"}10:00-17:00 |</h8>
                            <Link to="/contact" style={{color:"black"}}> {''} (408)444-5910 </Link>
                            <i className="fa fa-search fa-lg " onClick={this.setShow}/>
                            {this.state.show ? <input placeholder="Search..." type="text" className="search-input"/>: null }
                        </div>
                    </div>
                </div>
                <div className=" container modal">
                    <Modal className="my-modal1" isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg" style={{maxWidth: '2000px', width: '100%', height:'1000px'}}>
                        <ModalHeader toggle={this.toggleModal}><h4 className="modalContent">Appointment</h4></ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="fullName"></Label>
                                        <Input type="text" id="fullName" name="fullName" placeholder="Full Name" innerRef={input => this.fullName = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="phone"></Label>
                                        <Input type="phone" id="phone" name="phone" placeholder="Phone" innerRef= {input => this.phone= input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email"></Label>
                                        <Input type="email" id="email" name="email" placeholder="email" innerRef={input =>this.email= input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="date"></Label>
                                        <Input type="date" id="date" name="date" placeholder="Date"
                                            innerRef={input =>this.date = input} />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio"  name="remember" style={{width:"20px", height:"20px"}} innerRef={input => this.remember = input} /> I agree that my submitted data is being collected and stored.
                                        </Label>
                                    </FormGroup>
                                        <Button className="send-message mt-3" type="submit"> Submit</Button>
                                        <Button className="send-message1 mt-3 ml-2" type="cancel" value="cancel" color="secondary">Cancel</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
            </React.Fragment>
        );
    }
}
export default Header;
