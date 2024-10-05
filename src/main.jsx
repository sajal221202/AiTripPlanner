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
import ErrorBoundary from './ErrorBoundary.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip />
  },
  {
    path: '/my-trips',
    element: <MyTrips />
  }
])

const Root = () => {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (!GOOGLE_CLIENT_ID) {
    console.error('Google Client ID is not set. Please check your .env file.');
    return <div>Error: Google Client ID is not configured.</div>;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Header />
          <RouterProvider router={router} />
          <Toaster />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
