import React, {  useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import {  Link, useLoaderData } from 'react-router-dom'

export default function MyVisaApplications() {
  const applications = useLoaderData()

  const [addsVisa, setAddVisa] = useState(applications)
const [searchCountry, setSearchCountry] = useState()

  
 const handleChange=()=>{
  const matchCountries = addsVisa.filter((countries)=>
    countries.countryName.toLowerCase().includes(searchCountry.toLocaleLowerCase())
    )
console.log(matchCountries)
 }



const handleDelete =(id)=>{

fetch(`https://assignment-10-server-flax-delta.vercel.app/users/${id}`,{
  method: "DELETE"
})
.then((res)=>res.json())
.then((result)=>{
  console.log(result)
})
}
  
  



  return (
    <div >
      <Navbar></Navbar>
    <div>
    <div className='w-10/12 mx-auto'>
    <h1 className='text-center text-4xl font-extrabold my-8'>My Visa Applications</h1>
    <input
  type="text"
  value={searchCountry}
  placeholder="Type here"
  className="input input-bordered input-info w-full max-w-xs" onChange={(e)=>setSearchCountry(e.target.value)}/>
  <button onClick={handleChange}>Search</button>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
{
    applications.map((application)=><div key={application._id} className="card bg-base-100  shadow-xl">
   
    <div className="card-body items-center text-center">
      <h2 className="card-title">Country: {application.countryName}</h2>
      <figure className="px-10 pt-10">
      <img
        src={application.countryImage}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
      <p>Fee:${application.fee}</p>
      <p>{application.validity}</p>
      <p>{application.fName} {application.lName}</p>
      <p>{application.email}</p>
    
      <div className="card-actions">
        <button onClick={()=>handleDelete(application._id)} className="btn btn-primary">Cancel</button>
        
      </div>
    </div>
  </div>)
  }
</div>

  
    </div>
    </div>
     <Footer></Footer>
    </div>
  )
}
