import React from 'react'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import AdminDashboard from '../pages/AdminDashboard'
import UpdateRestraurant from '../pages/UpdateRestraurant'
import CustomerDashboard from '../pages/CustomerDashboard'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       
       <Route path ="/admin/dashboard" element={<ProtectedRoute role = "admin">
        <AdminDashboard /> 
       </ProtectedRoute>} />

       <Route path = "/admin/update/" element={<ProtectedRoute role="admin ">
        <UpdateRestraurant />
       </ProtectedRoute>} />

       <Route path = "/customer/dashboard" element={<ProtectedRoute role="customer">
        <CustomerDashboard />
       </ProtectedRoute>} />

    </Routes>
  )
}

export default AllRoutes
