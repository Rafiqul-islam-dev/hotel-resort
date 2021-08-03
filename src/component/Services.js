import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        Service:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
            },
        ]
    };
    render() {
        return (
            <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {this.state.Service.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
        )
    }
}
