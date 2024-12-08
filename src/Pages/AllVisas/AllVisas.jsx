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
      <h1 className='text-center bg-gray-400 w-10/12 mx-auto mt-10 text-white text-4xl font-bold py-8'>All Visas</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5 bg-gray-400 p-16 min-h-[70vh] mb-8'>
      
        {visas.map((visa)=><AllVisa key={visa._id} visa={visa}></AllVisa>)}
      </div>
      <Footer></Footer>
    </div>
  )
}
