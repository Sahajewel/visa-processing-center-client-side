import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useLoaderData } from 'react-router-dom'
import AllVisa from '../AllVisa/AllVisa'

export default function AllVisas() {
    const visas = useLoaderData()
    console.log(visas)
  return (
    <div>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5 my-10 min-h-[70vh]'>
        {visas.map((visa)=><AllVisa key={visa._id} visa={visa}></AllVisa>)}
      </div>
      <Footer></Footer>
    </div>
  )
}
