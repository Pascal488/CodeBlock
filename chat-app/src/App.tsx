import React from 'react';
import logo from './logo.svg';

import Login from './pages/Login';

import SignUp from './pages/Sign-up';

import Home from './pages/Home';

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

import { useContext } from "react";
// import { Authcontext } from "./context/Authcontext";

function App() {
  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children
  // };
  return (
   
    <BrowserRouter>
      <Routes>

          <Route path="/">
          <Route index element={<Login />}/>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<SignUp />} />
          </Route>

      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
