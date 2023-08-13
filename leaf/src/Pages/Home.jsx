import React,{ useState } from 'react'
import axios from 'axios'
import './css/Home.css'
import InfoCard from '../UI/InfoCard'
import leafblight from '../assets/northenleafblight.jpeg'
import rust from '../assets/rust.png'
import MaizeHist from '../UI/MaizeHist'
import '../UI/css/MaizeHist.css'
function Home() {
  const Blightdetails= "Northern leaf blight (NLB) is a fungal disease that affects maize crops worldwide. It is caused by the pathogen Exserohilum turcicum, which infects the leaves and reduces photosynthesis, grain yield and quality. NLB symptoms include elongated, tan or gray lesions on the leaves that may coalesce and cover large areas of the leaf surface.The fungus survives on infected plant debris and can be dispersed by wind or rain to new hosts. The disease is favored by moderate temperatures and high humidity, and can be controlled by using resistant varieties, crop rotation, fungicide application and proper residue management."
  const Rustdetails= "Rust is a fungal disease that affects maize and other cereal crops. It is caused by different species of Puccinia, which produce orange or brown spores on the leaves and stems of the plants. Rust can reduce yield and quality of maize by interfering with photosynthesis and transpiration, and by predisposing the plants to secondary infections. Rust can be managed by using resistant varieties, crop rotation, fungicides, and biological control agents."
  return (
    <div className='HomePage'>
      <MaizeHist/>
      <InfoCard title='Northen Leaf Blight' details={Blightdetails} image={leafblight} />
      <InfoCard title='Rust' type='reverse' details={Rustdetails} image={rust} />
    </div>
  )
}

export default Home