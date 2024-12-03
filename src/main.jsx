import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <RouterProvider router={router}>
     
     <StrictMode>
     
     
     </StrictMode>,
     </RouterProvider>
 </AuthProvider>
)
