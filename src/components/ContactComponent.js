import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import styled from "styled-components";



const Header = styled.h1`
margin-top: 1px;
line-height: 60px;
color: #fff;
text-shadow: .1em .04em 0 rgb(128, 128, 128);
`;

const SubHeader = styled.h3`
margin-top: 20px;
color:#4695a4;
font-weight: 700;
font-size: 35px;
`;
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject:'',
            message: '',
            agree: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    render() {
        
        return (
            <div className="container contact-content">
                <div className="row row-content">
                    <div>
                    <Header className="col top-project mt-2 ">CONTACT ME</Header>
                        <h2 className="col mb-2 mt-2">Dropping a line to say good day, see if we can build something amazing together? I’d love to hear from you!</h2>
                    </div>
                </div>
                <div className="row row-about ">
                    <div className="col-md-6">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={1}></Label>
                                <Col lg={12}>
                                    <Input className="text-message" type="text" id="name" name="name" 
                                        placeholder="Name" 
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Email" md={1}></Label>
                                <Col lg={12}>
                                    <Input className="text-message"  type="text" id="email" name="email" style={{backgroundColor:"rgb(208, 229, 188)", color:"black"}}
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="subject" md={1}></Label>
                                <Col lg={12}>
                                    <Input className="text-message"  type="text" id="subject"  name="subject" style={{backgroundColor:"rgb(224, 224, 191)", color:"black"}}
                                        placeholder="Subject"
                                        value={this.state.subject}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={1}></Label>
                                <Col lg={12}>
                                    <Input type="textarea" id="message" name="message" style={{backgroundColor:"rgb(178, 227, 224)", color:"black"}}
                                        rows="12"
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 11, offset: 1}}>
                                    <Button className="sendMessage" type="submit">SEND MESSAGE
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                        <div className="col-md-6 text-center">
                        <SubHeader>Find me on </SubHeader>
                            <a className="btn btn-social-icon btn-google" href="https://ttewabe.github.io/Resume/" target="_blank"><i className="fa fa-book" /></a>{' '}
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/tewabe-tadege-58386223b/" target="_blank"><i className="fa fa-linkedin" /></a>{' '}
                            <a className="btn btn-social-icon btn-github" href="https://github.com/ttewabe" target="_blank"><i className="fa fa-github" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCB7pGlj43FBV5KSQjmxIjIw" target="_blank"><i className="fa fa-youtube" /></a>
                            </div>
                        </div> 
                </div>
            );
    }
}
export default Contact;