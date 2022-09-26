import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Calendar from './components/Calendar/Calendar';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { useLocation } from 'react-router-dom';

type stateType = {
  token?: string
}

function App() {
  const location = useLocation();
  const state = location.state as stateType;
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={state?.token ? <Calendar /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;