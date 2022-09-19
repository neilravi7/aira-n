import { Component } from "react"
import { Container, Row, Col } from "reactstrap";
import '../../../styles/hero-wrap.css';
import heroImage from '../../../assets/images/Hero/hero.jpg';

export default class HeroWrap extends Component {
    render() {
        return (
            <div className="hero-wrap" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: "50% 0%"
                }} 
                data-stellar-background-ratio="0.5">
                
                <Container>
                    <Row className="no-gutters slider-text justify-content-start align-items-center justify-content-center">
                        <Col lg="8" className="ftco-animate fadeInUp ftco-animated">
                            <div className="text w-100 text-center mb-md-5 pb-md-5">
                                <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
                                {/* <p style="font-size: 18px;">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p> */}
                                {/* <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="ion-ios-play"></span>
                        </div>
                        <div className="heading-title ml-5">
                            <span>Easy steps for renting a car</span>
                        </div>
                    </a> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}
