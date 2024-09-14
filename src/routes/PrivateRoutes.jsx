import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div className='flex justify-center mt-[250px] md:mt-[350px]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;