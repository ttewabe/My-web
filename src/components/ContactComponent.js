import React, { Component} from 'react';
import {  Button, Label, Col, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            phoneNum: '',
            email: '',
            subject:'',
            message: '',
            agree: false,
            touched: {
                fullName: false,
                phoneNum: false,
                email: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col breadcrumb">Contact</div>
        </div>
        <div className="row">
                <div className="col breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" style={{color:"white", fontSize:"30px"}}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active style={{color:"white" , fontSize:"30px"}}>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col map-size">
                    <Map />
                </div>
            </div><hr/>
            <div className="row  card-container mt-5">
                <div className="col-md-6   card-content" >
                    <h1 className="card-title1">Have a Questions?</h1>
                        <h4 className="card-body1 mt-5">We are ready to make your day better by answering you question consult about how to reduce your tax liability for maximum return contact us for faster response call or chat with us.</h4>
                        <a role="button" className="card-body1 " style={{color:"black"}} href="tel:+12065551234">Phone:  +251 (958) 134490</a><br/>
                        <a role="button" className="card-body1" style={{color:"black"}} href="mailto:fakeemail@fakeemail.co">Email:  sjmart22@gmail.com</a>
                </div>
                <div className="col-md-5  image-container">
                    <img src="./assets/images/fin7.jpeg"  alt="bg Logo"/>
                </div>
            </div>
            
            <div className="row row-content card-form">
                <div className="col-12">
                    <h2 className="breadCrumb1 mt-3 mb-3">Get in Touch</h2>
                </div>
                <div className="col-md-10">
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="fullName" sm={2}>Full Name</Label>
                            <Col sm={10}>
                                <Control.text model=".fullName" id="fullName" 
                                    name="firstName"
                                    placeholder="Full Name"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".fullName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="phoneNum" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Control.text model=".phoneNum" id="phoneNum" 
                                    name="phoneNum"
                                    placeholder="Phone number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(10),
                                        maxLength: maxLength(15),
                                        isNumber
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".phoneNum"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 10 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid email address'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="subject" sm={2}>Subject</Label>
                            <Col sm={10}>
                                <Control.text model=".subject" id="subject" 
                                    name="subject"
                                    placeholder="subject"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(100)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".fullName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 100 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" sm={2}>Message</Label>
                                <Col sm={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Col sm={{size: 10, offset: 2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox
                                            model=".agree"
                                            name="agree"
                                            className="form-check-input"
                                        /> {' '}
                                        <strong>I agree that my submitted data is being collected and stored.</strong>
                                    </Label>
                                </div>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col sm={{size: 10, offset: 2}}>
                                <Button type="submit" className=" send-message" >
                                    Send Message
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div> <hr/>
        </div>
    );
  }
}
    function Map() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 ">
                        <h2><b>Drar Building</b></h2>
                            <MapContainer center={[9.020542164589969,38.82648289203644]} zoom={13} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[9.020542164589969,38.82648289203644]}>
                                    <Popup>
                                        <h3>Head Office/Drar Building</h3> <br /> 
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div className="col-sm-6 ">
                            <h2><b>Military Tera</b></h2>
                                <MapContainer center={[9.020542164589969,38.82648289203644]} zoom={13} scrollWheelZoom={true}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[9.030821, 38.739480]}>
                                        <Popup>
                                        <h3>Military Tera</h3> <br /> 
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                        </div>
                </div>
        </div>
    );
}

export default  Contact;

    