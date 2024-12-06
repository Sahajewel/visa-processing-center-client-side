import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Pages/Footer/Footer'
import Carousel from '../Carousel/Carousel'
import VisaEligibilityChecker from '../VisaEligibilityChecker/VisaEligibilityChecker'
import VisaProcessSteps from '../VisaProcess/VisaProcess'
import LatestVisa from '../../Pages/LatestVisa/LatestVisa'


export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <LatestVisa></LatestVisa>
      <VisaEligibilityChecker></VisaEligibilityChecker>
      <VisaProcessSteps></VisaProcessSteps>
      <Footer></Footer>
    </div>
  )
}
