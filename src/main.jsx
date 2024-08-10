import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/Index.jsx'
import MyTrips from './my-trips/index.jsx'

//router bana rahe hai ham yaha se
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip/index.jsx',
    element:<CreateTrip/>
  },
  //we will use dynamic routing here
  {
    path:'/view-trip/:tripId',//: before tripId is use to pass any value in place of tripId
    element:<ViewTrip/>
  },
  {
    path:'/my-trips',
    element:<MyTrips/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* we will add google authentication Provider */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>

    {/* header will be throughout the application thus mount here */}
    <Header/>

    {/* <App />now inplace of this ,provide router provider*/}
    <RouterProvider router={router}/>

    <Toaster />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
