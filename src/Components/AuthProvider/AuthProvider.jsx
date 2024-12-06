import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase_init/_firebase_init'
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [loginUser, setLoginUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const handleRegister= (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
      }
      const handleUpdateUser=(name, photo)=>{
   
        return  updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photo
          })
        }
        const handleLogin = (email, password)=>{
            setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
          
          }
          useEffect(()=>{
            const unsubscribe=()=> {
             onAuthStateChanged(auth, (currentUser)=>{
                setLoginUser(currentUser)
                setLoading(false)
              })
            }
            return  unsubscribe()
            
            },[])
            const logout = ()=>{
                return  signOut(auth)
                }
    const AuthInfo = {
        handleRegister,
        handleUpdateUser,
        handleLogin,
        logout,
        loginUser,
        setLoginUser,
        loading
    }
  return (
    <div>
     <AuthContext.Provider value={AuthInfo}>
        {children}
     </AuthContext.Provider>
    </div>
  )
}
