import './App.css';
import Navbar from './components/header/Navbar';
import NewNav from './components/header/newnavbar/NewNav';
import MainComponent from './components/home/MainComponent';
import Footer from './components/footer/footer';
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import { Routes, Route } from "react-router-dom";
import Cart from './components/cart/cart';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <>
      <Navbar />
      <NewNav />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
