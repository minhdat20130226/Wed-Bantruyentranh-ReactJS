
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './homepage.scss'
import Banner from './Banner/Banner';
import PromoteBanner from './Banner/PromoteBanner'
import {Container} from 'react-bootstrap';
import TopicGroup from './TopicGroup';
import BuyDialog from '../../components/BuyDialog';
class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <>
            <Banner/>                 
            <PromoteBanner/>
            <TopicGroup/>
            
            </>

        );

    }
}
export default HomePage;