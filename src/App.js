import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
