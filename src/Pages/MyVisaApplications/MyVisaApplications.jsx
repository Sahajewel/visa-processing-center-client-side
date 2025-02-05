import React, {  useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'
// import {  Link, useLoaderData } from 'react-router-dom'

export default function MyVisaApplications() {
  // const applications = useLoaderData()

  const [addsVisa, setAddVisa] = useState([])
const [searchCountry, setSearchCountry] = useState("")

useEffect(()=>{
  fetch(`https://assignment-10-server-flax-delta.vercel.app/users`)
  .then((res)=>res.json())
  .then((result)=>setAddVisa(result))
  },[])
console.log(addsVisa)
 const handleChange=()=>{
  const matchCountries = addsVisa.filter((countries)=>
    countries.countryName.toLowerCase().includes(searchCountry.toLocaleLowerCase())

    )
    console.log(matchCountries)
setAddVisa(matchCountries)
 }



const handleDelete =(id)=>{

fetch(`https://assignment-10-server-flax-delta.vercel.app/users/${id}`,{
  method: "DELETE"
})
.then((res)=>res.json())
.then((result)=>{
  console.log(result)
  const remainingCountry = addsVisa.filter((visa)=> visa._id !== id)
  setAddVisa(remainingCountry)
  toast("Cancled")
})
}
  
  



  return (
    <div >
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
    <div>
    <div className='w-10/12 mx-auto min-h-[70vh]'>
   
    <h1 className='text-center text-4xl font-extrabold my-8'>My Visa Applications</h1>
  <div className='flex justify-center'>
  <input
  type="text"
  value={searchCountry}
  placeholder="Search Your Country"
  className="input input-bordered input-info w-full max-w-xs" onChange={(e)=>setSearchCountry(e.target.value)}/>
  <button className='btn bg-slate-300 text-black ml-4' onClick={handleChange}>Search</button>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
{
    addsVisa.map((application)=><div key={application._id} className="card bg-base-100  shadow-xl">
   
    <div className="card-body items-center text-center">
      <h2 className="card-title">Country: {application.countryName}</h2>
      <figure className="px-10 pt-10">
      <img 
        src={application.countryImage}
        alt="Shoes"
        className="rounded-xl w-40" />
    </figure>
    <p>Visa Type: {application.visaType}</p>
    <p>Time: {application.time}</p>
      <p>Fee:${application.fee}</p>
      <p>Vality:{application.validity}</p>
      <p>Name: {application.fName} {application.lName}</p>
      <p>Email: {application.email}</p>
     
    
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
