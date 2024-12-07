import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LatestVisa() {
  const [latest, setLatest] = useState([])

  useEffect(()=>{
    fetch("https://assignment-10-server-flax-delta.vercel.app/latest-visas")
    .then((res)=>res.json())
    .then((result)=>setLatest(result))
  }, [])
 
 
  return (
   <div className='mx-auto w-10/12 my-10'>
   
    <h1 className='text-center text-4xl font-extrabold my-8'>Latest Visa</h1>
    <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-5 '>
      {
        latest.map((update)=> <div key={update._id} className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={update.countryImage}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Country: {update.countryName}</h2>
          <p>Fee:${update.fee}</p>
          <p>{update.validity}</p>
        
          <div className="card-actions">
            <Link to={`/visa-details/${update._id}`} className="btn btn-primary">See Details</Link>
            
          </div>
        </div>
      </div>)
      }
      
    </div>
   <div className='text-lg flex mt-5 text-center mx-auto justify-items-center btn'>
   <Link to="/all-visas">See All Visas</Link>
   </div>
   </div>
  )
}
