import React from 'react'
import { useNavigate } from 'react-router-dom';



function ProtectedRoutes({user,children}) {
    const navigate = useNavigate();

    if(!user){
        navigate('/') 
        return <></>
    } else {
      return (<>{children}</>)
    }
 
}

export default ProtectedRoutes