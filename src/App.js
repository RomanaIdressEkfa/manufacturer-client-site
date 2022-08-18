import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import HomePage from './Pages/Home/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services/Services';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/Shared/NotFound';
import { HelmetProvider } from 'react-helmet-async';
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
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route element={<RequireAuth></RequireAuth>}>
              <Route path='/services' element={<Services></Services>}></Route>
            </Route>
          </Routes>
        </Navbar>
      </HelmetProvider>
    </div>
  );
}

export default App;
