import React from 'react'
import { Link } from 'react-router-dom'

export default function AllVisa({visa}) {
   const {_id,countryImage, countryName, fee,validity} = visa
  return (
    <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={countryImage}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Country: {countryName}</h2>
    <p>Fee:${fee}</p>
    <p>{validity}</p>
    <div className="card-actions">
      <Link to={`/visa-details/${_id}`} className="btn btn-primary">See Details</Link>
      
    </div>
  </div>
</div>
  )
}
