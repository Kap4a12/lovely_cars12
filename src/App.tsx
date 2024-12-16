
import { Route, Routes } from 'react-router-dom';

import { Home } from './components/pages/home/Home';
import { Layout } from './components/layout/Layout';
import { NotFound } from './components/pages/notFound/NotFound';
import { LoginPage } from './components/pages/login/LoginPage';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />  
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={ <NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
