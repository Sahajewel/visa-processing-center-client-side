import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Components/Firebase_init/_firebase_init';
import Footer from '../Footer/Footer';

export default function Login() {
    const {handleLogin} = useContext(AuthContext)
   
        const handleLoginSubmit=(e)=>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
          e.target.reset()
           
           
            handleLogin(email, password)
            .then((result)=>{
                console.log(result.user)
                // navigate(location?.state?location.state:"/")
            })
            .catch((error)=>{
                console.log(error)
                toast("Invalid Password/Email")
            })
           
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
        <ToastContainer></ToastContainer>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    
      <form onSubmit={handleLoginSubmit} className="card-body">
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
          <label  className="label">
            <a   href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
           
                <button className="btn btn-success">Login</button>
           
         
        </div>
        <div className="mt-5">
            <button>If you don't have an account please <Link className="text-red-500" to="/register">Register</Link> </button>
        </div>
        <div>
          <button onClick={handleGoogle} className="text-red-500 bg-stone-500 px-3 py-2 text-lg" >Signin with google</button>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
   </div>
  )
}
