import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';

const VisaEligibilityChecker = () => {
  const [destination, setDestination] = useState('');
  const [purpose, setPurpose] = useState('');
  const [duration, setDuration] = useState('');
  const [eligibilityMessage, setEligibilityMessage] = useState('');

  const checkEligibility = () => {
    if (destination && purpose && duration) {
      setEligibilityMessage(
        `You are eligible to apply for a ${purpose.toLowerCase()} visa to ${destination}. Duration: ${duration} days.`
      );
    } else {
      setEligibilityMessage('Please fill out all fields to check your eligibility.');
    }
  };

  return (
   <div className='w-10/12 mx-auto bg-gray-400 p-20 my-20'>
     <Slide direction="right" duration={1000} delay={300} triggerOnce>
         <h2 className="text-4xl text-center    text-white font-bold mb-6 ">Visa Eligibility Checker</h2>
    </Slide>
     <Slide direction="left" duration={1000} delay={300} triggerOnce>
     <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto">
     
     <form
       onSubmit={(e) => {
         e.preventDefault();
         checkEligibility();
       }}
     >
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
         <select
           value={destination}
           onChange={(e) => setDestination(e.target.value)}
           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         >
           <option value="">Select a country</option>
           <option value="Germany">Germany</option>
           <option value="USA">USA</option>
           <option value="Canada">Canada</option>
           <option value="Japan">Japan</option>
         </select>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Travel</label>
         <select
           value={purpose}
           onChange={(e) => setPurpose(e.target.value)}
           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         >
           <option value="">Select a purpose</option>
           <option value="Tourism">Tourism</option>
           <option value="Work">Work</option>
           <option value="Study">Study</option>
           <option value="Business">Business</option>
         </select>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-2">Duration of Stay (days)</label>
         <input
           type="number"
           value={duration}
           onChange={(e) => setDuration(e.target.value)}
           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           placeholder="Enter duration in days"
         />
       </div>
       <button
         type="submit"
         className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
       >
         Check Eligibility
       </button>
     </form>
     {eligibilityMessage && (
       <p className="mt-4 text-sm font-medium text-green-600">{eligibilityMessage}</p>
     )}
   </div>
    </Slide>
    
        
   </div>
  );
};

export default VisaEligibilityChecker;
