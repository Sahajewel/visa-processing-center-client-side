import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const {loginUser, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return(
            <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-ball loading-lg"></span>
        </div>
        )
    }
    if(loginUser){
        return children
    }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  )
}
