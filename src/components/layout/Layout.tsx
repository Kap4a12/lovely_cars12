import { Outlet } from 'react-router-dom';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

const Layout = () => {
    return (
      <div className='wrapper'>
        <Header />        
        <main className="main"><Outlet /></main>
        <Footer/>
      </div>
    )
}

export {Layout}
