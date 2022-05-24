import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import HomePage from './Pages/Home/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
// import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services/Services';
import RequireAuth from './Pages/Login/RequireAuth';
import AdminRoute from './Pages/Login/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/Shared/NotFound';
import Profile from './Pages/Dashboard/Profile';
import MyOrder from './Pages/Dashboard/MyOrder';
import Review from './Pages/Dashboard/Review';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

          <Route element={<RequireAuth></RequireAuth>}>
            <Route path='/services' element={<Services></Services>}></Route>
          </Route>
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          </Route>
        </Routes>
      </Navbar>
      {/* 
      <Footer></Footer> */}
    </div>
  );
}

export default App;
