import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';
import Loading from '../Shared/Loading';

const RequireAuth = () => {
    const [admin, loading] = UseAdmin();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!admin) {
        return <Navigate to="/" replace />;
    }
    return <Outlet></Outlet>;
};

export default RequireAuth;