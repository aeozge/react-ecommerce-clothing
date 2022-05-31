import React from 'react';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
