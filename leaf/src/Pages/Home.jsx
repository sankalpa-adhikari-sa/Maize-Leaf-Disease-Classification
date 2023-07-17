import React,{ useState } from 'react'
import axios from 'axios'
import './css/Home.css'
import InfoCard from '../UI/InfoCard'
import leafblight from '../assets/northenleafblight.jpeg'
function Home() {
  const Blightdetails= "jhgg"
  const Rustdetails= "rust details"
  return (
    <div className='HomePage'>
      <InfoCard title='Northen Leaf Blight' details={Blightdetails} image={leafblight} />
      <InfoCard title='Rust' type='reverse' details={Rustdetails} image={leafblight} />
    </div>
  )
}

export default Home