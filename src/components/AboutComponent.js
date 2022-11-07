import React, { Component} from 'react';
import {Modal, ModalHeader, ModalBody, Form, popoverHeader } from 'reactstrap';


class About extends Component {
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
                        <div outline onClick={this.toggleModal}><b>About</b></div>
                        </div>
                    </div>
                </div>
                <div className=" container modal-skill">
                    <Modal className="my-modals"isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{maxWidth: '1100px', width: '100%', height:'100%'}} >
                    <ModalHeader toggle={this.toggleModal}><h1 className="about-t">Who is Tewabe?</h1></ModalHeader>
                        <ModalBody>
                    <div className="row" > 
                        <div className="col-lg-12 about-tt" > 
                        <h1>Engineer and Software Developer</h1>
                          <p>I'm passionate about bringing both the technical and visual aspects of digital products to life.User experience with strong organization, time management & communication skills. I'm able to work independently & collaboratively with a meticulous attention to detail.</p>
                          <p>I have a MSc Degree in Engineering, and Full Stack Website and Mobile App Developer.I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </React.Fragment>
    );
  }
}
export default About;