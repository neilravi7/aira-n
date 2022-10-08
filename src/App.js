import { Routes, Route, Navigate  } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

// Public or global layout.
import Layout from './component/Layout/Layout';
// pages of Public layout
import Home from './pages/Home/Home';
import CarListing from './pages/CarListing/CarListing';
import CarDetails from './pages/CarDetails/CarDetails';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';


// // Auth layout
// import AuthLayout from './component/Layout/AuthLayout';
// import LoginForm from './component/UI/Forms/LoginForm';
// import RegisterForm from './component/UI/Forms/RegisterFrom';
// import PasswordResetFrom from './component/UI/Forms/PasswordResetForm';
// import LoginModel from './component/UI/Forms/LoginModel';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<Navigate to="/home"/> } />
        <Route path="/cars" element={<CarListing />} exact />
        <Route path="/car/details/:carId" element={<CarDetails/>}/>
        <Route path="/profile" element={<Profile/>} exact />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </Layout>

    // <AuthLayout >
    //   <Routes>
    //     {/* <Route path="/login" element={<BookingForm/>} exact /> */}
    //     <Route path="/login" element={<LoginForm/>} exact />
    //     <Route path="/register" element={<RegisterForm/>} exact />
    //     <Route path="/password/reset" element={<PasswordResetFrom/>} exact />
    //     <Route path="/profile" element={<Profile/>} exact />
    //     <Route path="/login/model" element={<LoginModel buttonLabel="Login" />} exact />
    //   </Routes>
    // </AuthLayout>
    
  );
}

export default App;
