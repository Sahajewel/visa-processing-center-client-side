import React from 'react'
import caro1 from "./caro1.webp"
import caro2 from "./caro-2.webp"
import { Typewriter } from "react-simple-typewriter";
export default function Carousel() {
  return (
 <div>
    <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro1} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
   <div className='text-3xl mb-5 text-green-500 font-bold pt-3'>
   <Typewriter
        words={["Hello, Users! Welcome to our Website!"]}
        loop={0} // Set to 0 for infinite loops
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />
   </div>
      <h1 className="mb-5 text-5xl font-bold">Tracking Services</h1>
      
      <p className="mb-5">
      Once an application is submitted, the center often provides tracking services to inform applicants about the status of their visa application.
      </p>
     
    </div>
  </div>
</div>
  </div>
  <div id="item2" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro2} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Document Verification</h1>
      <p className="mb-5">
      The center verifies the authenticity of documents submitted for visa applications, ensuring that the information provided meets the requirements of the embassy or consulate.
      </p>
    
    </div>
  </div>
</div>
  </div>
  <div id="item3" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro1} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Application Assistance</h1>
      <p className="mb-5">
      The center helps applicants complete their visa applications correctly, ensuring all required documentation is included, such as identification, proof of travel, and financial stability.
      </p>
     
    </div>
  </div>
</div>
  </div>
 
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>

</div>
 </div>
  )
}
