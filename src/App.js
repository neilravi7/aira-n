import { Routes, Route, Navigate  } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Layout from './component/Layout/Layout';
import Home from './pages/Home';
import CarListing from './pages/CarListing';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<Navigate to="/home"/> } />
        <Route path="/cars" element={<CarListing />} exact />
        {/* <Route path="/about" element={<About />} />*/}
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </Layout>
  );
}

export default App;
