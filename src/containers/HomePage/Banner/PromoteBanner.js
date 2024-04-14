
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {Container} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

class PromoteBanner extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className='promote-banner'>
            <Container>
              <Dropdown.Menu show>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>


            </Container>

            </div>
        );

    }
}
export default PromoteBanner;