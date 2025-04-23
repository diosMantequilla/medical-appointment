import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import DoctorsPage from './pages/DoctorsPage'
import AppointmentsPage from './pages/AppointmentsPage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <DoctorsPage />,
      },
      {
        path: '/appointments',
        element: <AppointmentsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // {
      //   path: '*',
      //   element: <NotFoundPage />,
      // },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)