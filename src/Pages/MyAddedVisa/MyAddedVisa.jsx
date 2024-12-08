import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'
import { useLoaderData } from 'react-router-dom'

export default function MyAddedVisa() {
  // const updateVisa = useLoaderData()
  // // console.log(updateVisa)
  const {loginUser} = useContext(AuthContext)
const [addedVisa, setAddedVisa] = useState([])
  useEffect(()=>{
  fetch(`https://assignment-10-server-flax-delta.vercel.app/users/${loginUser?.email}`)
  .then((res)=>res.json())
  .then((result)=>setAddedVisa(result))
  },[addedVisa])
 
  const handleUpdateVisa=(e)=>{
e.preventDefault()
const form = e.target;
const countryImage = form.countryImage.value;
const countryName = form.countryName.value;
const description = form.description.value;
const age = form.age.value;
const fee = form.fee.value;
const validity = form.validity.value;
const application = form.application.value;
const updateVisa = ({countryImage, countryName,description, age, fee, validity,application})
console.log(updateVisa)
toast("Updated Information")
fetch(`https://assignment-10-server-flax-delta.vercel.app/update-visa/${loginUser?.email}`,{
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updateVisa)
})
.then((res)=>res.json())
.then((result)=>{
  console.log(result)
})
  }

  const handleDeleteVisa = (email)=>{
console.log("clicked")
fetch(`https://assignment-10-server-flax-delta.vercel.app/update/${email}`,{
  method: "DELETE",
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
  <div className='min-h-[70vh]'>
  <div className='mx-auto w-6/12 bg-gray-500 '>
   <p className='text-center my-10 py-5 text-white text-2xl font-bold'>{addedVisa.countryName}</p>
   <img className='w-40 mx-auto' src={addedVisa.countryImage} alt="" />
   <p className='text-center text-white my-5 text-lg'>{addedVisa.fee}</p>
   <p className='text-center text-white my-5 text-lg pb-5'>{addedVisa.validity}</p>
   <p>{addedVisa.application_method}</p>
   <div className='flex  justify-center'>
  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <form onSubmit={handleUpdateVisa} className="card-body w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="form-control col-s">
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
      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text text-white">Description</span>
        </label>
        {/* <input name='description' type="text" placeholder="Description" className="input input-bordered" required /> */}
       <textarea name="description"  placeholder='Description' id=""></textarea>
       
      </div>
      <div className="form-control mt-6 col-span-2">
        <button type='submit' className="btn btn-accent text-white">Update Visa</button>
      </div>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
   </div>
   <div  className='flex justify-center mt-4 pb-8'>

   <button onClick={()=>handleDeleteVisa(loginUser?.email)} className='btn '>Delete</button>
   </div>
   </div>
  </div>
      <Footer></Footer>
    </div>
  )
}

