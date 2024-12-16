import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import PopupAd from './components/PopupAd';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleOpenRegister = () => setShowRegisterForm(true);
  const handleOpenLogin = () => setShowLoginForm(true);
  const handleCloseForms = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
  };

  return (
    <div className="App">
      <Header onOpenRegister={handleOpenRegister} onOpenLogin={handleOpenLogin} />
      <PopupAd />
      <main>
        <section id="home">
          <h1></h1>
        </section>
        
        <MainContent />
        <ImageSlider />
      </main>
      <Footer />
      {showRegisterForm && <RegisterForm onClose={handleCloseForms} />}
      {showLoginForm && <LoginForm onClose={handleCloseForms} />}
    </div>
  );
}

export default App;
