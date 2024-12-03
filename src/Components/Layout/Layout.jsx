import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Pages/Footer/Footer'
import Carousel from '../Carousel/Carousel'
import VisaEligibilityChecker from '../VisaEligibilityChecker/VisaEligibilityChecker'
import VisaProcessSteps from '../VisaProcess/VisaProcess'


export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <VisaEligibilityChecker></VisaEligibilityChecker>
      <VisaProcessSteps></VisaProcessSteps>
      <Footer></Footer>
    </div>
  )
}
