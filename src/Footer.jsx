import React from 'react';
import { useContext } from 'react';
import  { ThemeContext } from './App';

const Footer = () => {
  const darkMode = useContext(ThemeContext);
  return (
    <footer className="bg-light text-dark text-center p-3">
      <div className="container">
        <p className="mb-0">© 2023 My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
