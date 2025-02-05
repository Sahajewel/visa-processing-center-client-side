import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function VisaDetails() {
 
    const visa = useLoaderData()
    const {_id,countryImage, countryName,visaType,description,age, fee,validity, application, time, valid} = visa
    console.log(visa)
  const handleApplyVisa = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const fName = form.fName.value
    const lName = form.lName.value
    const fee = form.fee.value

    const users =({email, fName, lName,fee,countryImage,countryName,description,age, fee,validity, application,visaType,time})
    form.reset()
    fetch("https://assignment-10-server-flax-delta.vercel.app/users",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(users)
    })
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result)
    })
  }
  return (
    <div>
        <Navbar></Navbar>
        <div className="card bg-gray-300   shadow-xl w-10/12 mx-auto min-h-[70vh] text-purple-400 my-20">
  <figure className="px-10 pt-10">
    <img
      src={countryImage}
      alt="Shoes"
      className="rounded-xl w-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Country: {countryName}</h2>
    <p>Visa Type: {visaType}</p>
    <p>Time: {time}</p>
   
   
    <p>Age: {age}</p>
    <p>Fee:${fee}</p>
    <p>Validity: {validity}</p>
    <p>Application Method: {application}</p>
    <p>Description: {description}</p>
    <div className="card-actions">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply for the visa</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <form onSubmit={handleApplyVisa} className="card-body">
      <div className="form-control ">
        <label className="label">
          <span className="label-text text-white">Country Image</span>
        </label>
        <input name='countryImage' type="text" placeholder="country image" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input  name='email' type="email" placeholder="email" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">First Name</span>
        </label>
        <input name='fName' type="text" placeholder="first name" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Last Name</span>
        </label>
        <input name='lName' type="text" placeholder="Last Name" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Fee</span>
        </label>
        <input name='fee' type="number" placeholder="fee" className="input input-bordered" required />
       
      </div>
     
      <div className="form-control mt-6">
        <button type='submit' className="btn btn-accent text-white">Apply</button>
      </div>
    </form>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
      <Footer></Footer>
    </div>
  )
}
