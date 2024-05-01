
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Image, Col, Row } from 'react-bootstrap';
import imgTest from '../../../assets/image/55c23d98-96ce-4478-9721-d0ee955c0070.jpg'
class PromoteBanner extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='promote-banner'>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={imgTest} fluid  />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={imgTest} fluid  />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={imgTest} fluid  />
                        </Col>
                    </Row>
                </Container>

            </div>
        );

    }
}
export default PromoteBanner;