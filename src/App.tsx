import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PayslipOverview from '@/screens/payslips-overview';
import PayslipDetails from '@/screens/payslip-details';
import '@/theme/theme.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <PayslipOverview/>,
  },
  {
    path: "payslip-details/:payslipId",
    element: <PayslipDetails />
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
