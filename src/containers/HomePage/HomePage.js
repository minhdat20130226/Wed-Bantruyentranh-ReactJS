
import React, { Component } from 'react';
import './homepage.scss'
import Banner from './Banner/Banner';
import PromoteBanner from './Banner/PromoteBanner'
import TopicGroup from './TopicGroup';
import WeekBook from './Section/WeekBook';
import RankBookWeek from './Section/RankBookWeek';
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
            <WeekBook/>
            <RankBookWeek nameSession={"TÌM KIẾM NHIỀU TRONG TUẦN"}/>
            <RankBookWeek nameSession={"DANH MỤC ĐỀ CỬ"}/>
            <RankBookWeek nameSession={"SẮP RA MẮT"}/>
            </>

        );

    }
}
export default HomePage;