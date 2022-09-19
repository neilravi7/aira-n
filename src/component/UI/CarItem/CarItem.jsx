import { Component } from "react";
import { Card, CardImg,  CardBody,
  CardTitle, CardLink, Col } from 'reactstrap';

export default class CarItem extends Component{
    constructor(props){
        super(props);
        this.carItem = this.props.carObject

    }
    render(){
        return(
            <Col md="4">
                 <Card className="bg-light mb-3">
                     <CardImg className="rounded" variant="top" src={this.carItem.car_photo} height="200" />
                     <CardBody>
                         <CardTitle>{this.carItem.car_name}</CardTitle>
                         <CardLink className="btn btn-success" href="#">Book Now</CardLink>
                         <CardLink className="btn btn-primary" href="#">Details</CardLink>
                     </CardBody>
                 </Card>
             </Col>
        );
    };
};