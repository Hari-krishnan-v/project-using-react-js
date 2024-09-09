import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuth } from './pages/user-auth';
import  UserProfile  from './pages/user-profile';
import  UserHome  from './pages/user-Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="" element={<UserHome/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
