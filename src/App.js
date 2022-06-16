import Register from './Register';
import Login from './login';
import React from 'react';
import Home from './Home'
import Result from './Result';
import { BrowserRouter as Router, Routes, 
    Route, Redirect,} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      
    <Routes>
      {
        <>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Result' element={<Result />} />
        </>
      }

    </Routes>
      
    </Router>
    </>
  );
}

export default App;