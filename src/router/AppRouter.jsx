import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import '../styles.css';

export const AppRouter = () => {
  
  const { status, checkAuthToken} = useAuthStore();
  // const authStatus = 'authenticated' ;//'not-authenticated'
  useEffect(() => {
    checkAuthToken();
  }, [])
  
  
  if ( status === 'checking') {
    return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div className="spinner" />
    </div>
    )
  }

  return (

    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<LoginPage/>}/>
              <Route path="/*" element={<Navigate to='/auth/login'/>}/>
            </>
            )
          : (
            <>
              <Route path="/" element={<CalendarPage/>}/>
              <Route path="/*" element={<Navigate to='/'/>}/>
            </>
            )
      }
      
    </Routes>
  )
}