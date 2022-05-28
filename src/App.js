import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import HomePage from './Pages/Home/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services/Services';
import RequireAuth from './Pages/Login/RequireAuth';
import AdminRoute from './Pages/Login/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/Shared/NotFound';
import MyOrders from './Pages/Dashboard/MyOrders'
import Profile from './Pages/Dashboard/Profile/Profile'
import Payment from './Pages/Dashboard/Payment'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import AddReview from './Pages/Dashboard/AddReview'
import ManageProducts from './Pages/Dashboard/ManageProducts'
import AddProduct from './Pages/Dashboard/AddProduct'
import ManageOrders from './Pages/Dashboard/ManageOrders'
import { HelmetProvider } from 'react-helmet-async';
import Purseus from './Pages/Purseus/Purseus';
import Portfolio from './Pages/Blog/Portfolio';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <HelmetProvider>
        <Navbar>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/perseus/:id' element={<Purseus></Purseus>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route element={<RequireAuth></RequireAuth>}>
              <Route path='/services' element={<Services></Services>}></Route>
            </Route>
            <Route element={<AdminRoute></AdminRoute>}>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            </Route>
            <Route path='/dashboard' element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } >
              <Route path='profile' element={<Profile />} />
              <Route path='myorders' element={<MyOrders />} />
              <Route path='payment/:paymentId' element={<Payment />} />
              <Route path='review' element={<AddReview />} />
              <Route path='orders' element={<ManageOrders />} />
              <Route path='addProduct' element={<AddProduct />} />
              <Route path='manageProducts' element={<ManageProducts />} />
              <Route path='makeAdmin' element={<MakeAdmin />} />
            </Route>
          </Routes>
        </Navbar>

        <Footer></Footer>
      </HelmetProvider>
    </div>
  );
}

export default App;
