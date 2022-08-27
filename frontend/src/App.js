import react,{useState, useEffect} from 'react'
import './App.css';
import Header from './Components/layouts/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/layouts/Homepage/HomePage'
import Login from './Components/layouts/Login/Login'
import Register from './Components/layouts/Register/Register'
import Products from './Components/layouts/Products/Products'
import ItemProduct from './Components/layouts/ItemProoduct/ItemProduct'
import Job from './Components/layouts/JobPage/Jobs'
import Rides from './Components/layouts/Ride/Rides'
import Pgs from './Components/layouts/Pg/Pgs'
import Footer from './Components/layouts/Footer/Footer'
import HashLoader from "react-spinners/HashLoader";
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);

  const userLogged = async() =>{

    try {
      const res = await axios.get("/");

      const data = await res.json();
      
      console.log(data);

      if(!res === 200 ){
        const err = new Error(res.err);

        throw err;
      }

      
    } catch (error) {

      document.location.href = "http://localhost:3000/login"
    }

  }


  // useEffect(() =>{
  //   userLogged();
  // })
  useEffect(( ) =>{
    setLoading(true);
    
    setTimeout(() =>{
      setLoading(false);
    },3000)

    
  },[])

  return (
   <div>
    {
      loading       ?
        <div className='loader'>
        <HashLoader color={'#fff'} loading={loading} size={50} />
        </div>
      :
      <div className="App">
      <Router>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/item' element={<ItemProduct />} />
            <Route path='/jobs' element={<Job />} />
            <Route path='/rides' element={<Rides />} />
            <Route path='/pg' element={<Pgs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    }
    </div>
  );
}

export default App;
