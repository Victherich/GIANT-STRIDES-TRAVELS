import React, { useContext, useState } from 'react'
import AdminDashborad from './AdminDashborad'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateAdminDashboard = () => {
   
   const adminToken = useSelector(state=>state.adminToken)
    
  return (
   adminToken?<Outlet/>:<Navigate to="/adminlogin"/>
  )
}

export default PrivateAdminDashboard
