
import React, { Component } from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import PromoteBanner1 from '../../../assets/image/banner/promote-banner1.png'
import PromoteBanner2 from '../../../assets/image/banner/promote-banner2.png'
import PromoteBanner3 from '../../../assets/image/banner/promote-banner3.png'

class PromoteBanner extends Component {

    render() {

        return (
            <div className='promote-banner'>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={PromoteBanner1} fluid  />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PromoteBanner3} fluid  />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PromoteBanner2} fluid  />
                        </Col>
                    </Row>
                </Container>

            </div>
        );

    }
}
export default PromoteBanner;