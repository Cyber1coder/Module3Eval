import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const ProtectedRoute = ({children,role}) => {

    const {auth} = useContext(AuthContext);

    if(!auth.isAuth){
        return <Navigate to = "/" />

    }

    if(role && auth.role !== role){
        return <Navigate to ="/" />
    }

    return children;

}

export default ProtectedRoute
