import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../Footer/Footer'
import { toast, ToastContainer } from 'react-toastify';
export default function AddVisa() {
  const handleAddVisa = (e)=>{
        e.preventDefault();
        console.log("clicked")
        const form = e.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const description = form.description.value;
        const age = form.age.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application = form.application.value;
     const addVisa = ({countryImage, countryName,description, age, fee, validity,application})
     toast("added visa successfully")
        fetch("http://localhost:5000/add-visa",{
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(addVisa)
          
        })
        .then((res)=>res.json())
        .then((result)=>{
          console.log(result)
        })
  }
  return (
   <div>
    <Navbar></Navbar>
    <ToastContainer></ToastContainer>
    <div className="card bg-gray-500 w-10/12 mx-auto max-w-sm shrink-0 shadow-2xl my-10 ">
    <h1 className='text-center text-3xl font-bold text-white my-5'>Add Visa Form</h1>
    <form onSubmit={handleAddVisa} className="card-body">
      <div className="form-control ">
        <label className="label">
          <span className="label-text text-white">Country Image</span>
        </label>
        <input name='countryImage' type="text" placeholder="country image" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Country Name</span>
        </label>
        <input name='countryName' type="text" placeholder="country name" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Description</span>
        </label>
        <input name='description' type="text" placeholder="Description" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Age Restriction</span>
        </label>
        <input name='age' type="number" placeholder="age" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Fee</span>
        </label>
        <input name='fee' type="number" placeholder="fee" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Validity</span>
        </label>
        <input name='validity' type="text" placeholder="validity" className="input input-bordered" required />
       
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Application Method</span>
        </label>
        <input name='application' type="text" placeholder="application method" className="input input-bordered" required />
       
      </div>
      <div className="form-control mt-6">
        <button type='submit' className="btn btn-accent text-white">Add Visa</button>
      </div>
    </form>
  </div>
    <Footer></Footer>
   </div>
  )
}
