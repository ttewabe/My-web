import React, { Component} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';


class Work extends Component {
        constructor(props) {
            super(props);
            this.state = {
            isModalOpen: false,
            };
            
            this.toggleModal = this.toggleModal.bind(this);
            
        }
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        render() {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row ">
                            <div className="col-12">
                            <div outline onClick={this.toggleModal}><b> Skill</b></div>
                            </div>
                        </div>
                    </div>
                    <div className=" container modal-skill">
                        <Modal className="my-modals"isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{maxWidth: '1000px', width: '100%', height:'100%'}} >
                        <ModalHeader toggle={this.toggleModal}><h2 className="about-t">MY SKILLS</h2></ModalHeader>
                            <ModalBody>
                        <div className="row "> 
                            <div className="col-lg-12 about-tt" > 
                                <Form onSubmit={this.handleLogin}><h1>My toolbox for Full Stack Development magic employs a full compliment of technologies!</h1>

                                <FormGroup>
                                    <h1 style={{color:"#e9d5b8"}}>PROFICIENT </h1>
                                </FormGroup>
                                <FormGroup>
                                    <h4>HTML, CSS, BOOTSTRAP</h4>
                                    <div className="percent">
                                    <div style={{width: "100%"}}></div></div>
                                </FormGroup>
                                <FormGroup>
                                <h4>JAVA, JAVASCRIPT, JQUERY</h4>
                                    <div className="percent">
                                    <div style={{width: "100%"}}></div></div>
                                </FormGroup>
                                <FormGroup>
                                    <h4>BOOTSTRAP, GIT, GITHUB, POSTMAN, FIGMA</h4>
                                    <div className="percent">
                                    <div style={{width: "100%"}}></div></div>
                                </FormGroup>
                                <FormGroup>
                                <h4>REACT, REACT NATIVE, REDUX</h4>
                                <div className="percent">
                                <div style={{width: "100%"}}></div></div>
                                </FormGroup>
                                <FormGroup>
                                <h4>NODE JS, EXPRESS, SQL, MONGODB, MONGOOSE</h4>
                                <div className="percent">
                                <div style={{width: "100%"}}></div></div>
                                </FormGroup>

                                <FormGroup className="mt-5">
                                    <h1 style={{color:"#e9d5b8"}}>FAMILIAR </h1>
                                </FormGroup>
                                <FormGroup>
                                    <h4>PYTHON, C, C#, ANGULAR, AWS</h4>
                                    <div className="percent">
                                    <div style={{width: "100%"}}></div></div>
                                </FormGroup>
                                
                                    <div className='row'>
                                    <div className='col-12 resume-btn'>
                                        <button><a href="https://ttewabe.github.io/html-js/" target="_blank">
                                        RESUME
                                        </a></button>
                                    </div>
                                    </div>
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
export default Work;


