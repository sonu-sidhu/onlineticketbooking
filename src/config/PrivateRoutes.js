import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
function PrivateRoutes() {
    const auth = localStorage.getItem('auth');

    return auth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
