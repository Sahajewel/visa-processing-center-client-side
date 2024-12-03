import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {  toast, ToastContainer } from "react-toastify";
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Components/Firebase_init/_firebase_init';
import Footer from '../Footer/Footer';


export default function Register() {
    const {handleRegister, handleUpdateUser} = useContext(AuthContext)
    const handleRegisterSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()
        const upper = /[A-Z]/;
        const lower = /[a-z]/
       
        
        if(password.length <6){
        return  toast("Password minimum length 6 chracter")
         
        }
       else if(!upper.test(password)){
        return  toast("Put atleast 1 uppercase")
         
        }
       else if(!lower.test(password)){
         return toast("Put atleast 1 lowercase")
         
        }
        handleRegister(email, password)
      .then((result)=>{
            console.log(result.user)
            // navigate("/")
            handleUpdateUser(name, photo)
            .then((result)=>{
                console.log(result)
                
            })
            .catch((error)=>{
                console.log(error.message)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(email, password)
    }
    const provider = new GoogleAuthProvider();
    const handleGoogle = ()=>{


        signInWithPopup(auth, provider)
        .then((result)=>{
        console.log(result.user)
        // setUser(result.user)
        // navigate(location?.state?location.state:"/")
        }).catch((error)=>{
        console.log(error)
        // setUser(null)
        })
          }
  return (
   <div>
    <Navbar></Navbar>
    <ToastContainer></ToastContainer>
     <div className="hero bg-base-200 min-h-screen">

<div className="hero-content flex-col ">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Register now!</h1>
    <p className="py-6">
      
    </p>
  </div>
  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleRegisterSubmit} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo </span>
        </label>
        <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
       
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-accent">Register</button>
      </div>
      
      <div className="mt-5">
          <button>If you already have an account please <Link className="text-red-500" to="/login">Login</Link> </button>
      </div>
      <div>
        <button onClick={handleGoogle} className="text-red-500 bg-purple-300 px-3 py-2 text-lg" >signin with google</button>
      </div>
    </form>
  </div>
</div>
</div>
<Footer></Footer>
   </div>
  )
}
