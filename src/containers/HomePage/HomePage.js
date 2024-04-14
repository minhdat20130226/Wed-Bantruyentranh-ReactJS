
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './homepage.scss'
import Banner from './Banner/Banner';
import PromoteBanner from './Banner/PromoteBanner'
import {Container} from 'react-bootstrap';

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <>
            <Banner/>                 
            <PromoteBanner/>
            </>

        );

    }
}
export default HomePage;