import React from 'react'
import { Link } from 'react-router-dom'

export default function AllVisa({visa}) {
   const {countryImage, countryName, fee,validity} = visa
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
      <button className="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
  )
}
