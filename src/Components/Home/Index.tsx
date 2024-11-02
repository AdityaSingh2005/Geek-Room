import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import About from './About/About'
import AboutLanding from './About/AboutLanding'
import FAQs from './FAQs/FAQs'
import ContactForm from '../ContactForm/ContactForm'
import Locations from '../Locations/Locations'
import OurWork from '../OurWork/OurWork'
import CounterCard from '../CounterCard/CounterCard'

const Index = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
        <LandingPage/>
        <CounterCard/>
        <About/>
        <AboutLanding/>
        <OurWork/>
        <FAQs/>
        <Locations/>
        <ContactForm/>
    </div>
  )
}

export default Index