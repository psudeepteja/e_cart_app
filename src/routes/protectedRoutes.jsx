import React, { useEffect } from 'react'
import { Link, Navigate, useLocation } from "react-router-dom";

function ProtectedRoutes({ children }) {
const user = sessionStorage.getItem("userName")

    if (!user){  return <Navigate to="/auth" replace />;}


    return children
}

export default ProtectedRoutes