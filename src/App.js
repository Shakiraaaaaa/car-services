import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/log in/login/Login';
import ServiceDetail from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Header/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
