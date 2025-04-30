import React from "react";
import './Card.css'

function Card(props){
    let badgeText;
    
    if(props.item.openspots===0){
        badgeText='SOLD OUT'
    }

    else if(props.item.location === 'Online'){
        badgeText='ONLINE'
    }

    console.log(props.item)

    return(
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.cover_image} alt="" className="card-image"/>
            <div className="card-content">
                <img src='images/star.png' alt=""></img> 
                <span>
                    {props.item.stats.rating} ({props.item.stats.review_count}) {props.item.location}
                </span>
                <span>
                    <p>{props.item.title}</p>
                    <p><strong>From ${props.item.price} / person</strong></p>
                </span>
            </div>
        </div>
    )
} 

export default Card