import React from 'react'
import { useState } from 'react'
import leafblight from '../assets/northenleafblight.jpeg'
import './css/InfoCard.css'

function InfoCard(props) {
    const InfoCardStyle= {

    }
    if (props.type === "reverse") {
        InfoCardStyle.flexDirection = "row-reverse";
    }
    const cardclassnames= `InfoCard ${props?.type}`
  return (
    <div style={InfoCardStyle} className={cardclassnames}>
        <div className='InfoCardDetail'>
          <h3>{props.title}</h3>
          <p>{props.details}</p>
        </div>
        
        <img src={props.image} alt='Northen Leaf blight'/>
   
      </div>
  )
}

export default InfoCard