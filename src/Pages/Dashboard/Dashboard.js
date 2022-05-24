import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer';
const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile mt-20 bg-slate-600">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><NavLink to='/profile' className='rounded-lg'>Profile</NavLink></li>
                        <li><NavLink to='/myorder' className='rounded-lg'>MyOrders</NavLink></li>
                        <li><NavLink to='/review' className='rounded-lg'>Review</NavLink></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;