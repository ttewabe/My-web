import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Slider from './SliderComponent';
import Support from './SupportComponent';


function RenderCard({item}) {
    return (
        <Card>
        <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle >{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    function About(props) {
        return (
            <React.Fragment> 
                <div className="container-fluid"> 
                    <div className="row">
                        <Slider />
                    </div>
                </div>
                <div className="container"> 
                    <div className="row">
                        <div className="col-md m-1 mt-5 ">
                            <RenderCard item={props.info} />
                        </div>
                        <div className="col-md m-1 mt-5">
                            <RenderCard item={props.finance} />
                        </div>
                        <div className="col-md m-1 mt-5">
                            <RenderCard item={props.help} />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col mt-5">
                        <Support/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}
export default About;