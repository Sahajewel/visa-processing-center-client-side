import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
  return (
    <div className='min-h-screen items-center justify-center flex flex-col'>
       <h1 className='text-2xl'>Opps!</h1>
       <h1 className='text-2xl font-bold'>{error.status}</h1>
       <p className='text-2xl'>Page {error.statusText}</p>
       <Link to="/" className='bg-red-400 mt-5 px-4 py-3 text-lg text-white rounded-xl hover:bg-red-300 duration-300'>Back to Home</Link>
    </div>
  )
}
