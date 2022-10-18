import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

// Common Layout
import CommonLayout from './component/Layout/CommonLayout';

// Auth layout
import AuthLayout from './component/Layout/AuthLayout';

import Home from './pages/Home/Home';
import CarListing from './pages/CarListing/CarListing';
import CarDetails from './pages/CarDetails/CarDetails';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from "./pages/Profile/Profile";


import LoginForm from './component/UI/Forms/LoginForm';
import RegisterForm from './component/UI/Forms/RegisterFrom';
import PasswordResetFrom from './component/UI/Forms/PasswordResetForm';
import MainPage from './pages/Home/MainPage';
// import LoginModel from './component/UI/Forms/LoginModel';

function App() {
  return (
    <React.Fragment>
      <Routes>
        
        <Route path="/" element={<CommonLayout/>}>
          <Route path="/" element={<Navigate to="/home"/> } />
          <Route path="/home" element={<Home />} exact />
          <Route path="/main-page" element={<MainPage />} exact />
          <Route path="/cars" element={<CarListing />} exact />
          <Route path="/car/details/:carId" element={<CarDetails/>}/>
        </Route>
        
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="/auth/login" element={<LoginForm/>} exact />
          <Route path="/auth/register" element={<RegisterForm/>} exact />
          <Route path="/auth/password/reset" element={<PasswordResetFrom/>} exact />
          <Route path="/auth/profile" element={<Profile/>} exact />
        </Route>
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;