import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider'

export default function MyAddedVisa() {
  const {loginUser} = useContext(AuthContext)
const [addedVisa, setAddedVisa] = useState([])
  useEffect(()=>{
  fetch(`https://assignment-10-server-flax-delta.vercel.app/users/${loginUser?.email}`)
  .then((res)=>res.json())
  .then((result)=>setAddedVisa(result))
  },[])
  console.log(addedVisa)
  return (
    <div>
        <Navbar></Navbar>
   <div className='mx-auto w-6/12 bg-gray-500'>
   <p className='text-center my-10 py-5 text-white text-2xl font-bold'>{addedVisa.countryName}</p>
   <img className='w-40 mx-auto' src={addedVisa.countryImage} alt="" />
   <p className='text-center text-white my-5 text-lg'>{addedVisa.fee}</p>
   <p className='text-center text-white my-5 text-lg pb-5'>{addedVisa.validity}</p>
   <p>{addedVisa.application_method}</p>
   <div className='flex  justify-center'>
   <button className='btn'>Update</button>
   </div>
   <div  className='flex justify-center mt-4 pb-4 mb-8'>

   <button className='btn '>Delete</button>
   </div>
   </div>
      <Footer></Footer>
    </div>
  )
}

