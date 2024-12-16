import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './components/pages/home/Home';
import { Posts } from "./components/pages/Posts/Posts";
import { Users } from './components/pages/users/Users';
import { Layout } from './components/layout/Layout';
import { NotFound } from './components/pages/notFound/NotFound';
import { LoginPage } from './components/pages/login/LoginPage';
import { RequireAuth } from './components/hoc/RequireAuth';
import './App.css';
import { AuthProvider } from './components/hoc/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />        
          <Route 
            path="users" 
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
            />
          <Route 
            path="posts" 
            element={
              <RequireAuth>
                <Posts />
              </RequireAuth>
            }
            />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={ <NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
