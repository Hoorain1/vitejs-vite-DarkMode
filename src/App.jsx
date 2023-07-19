import React from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import {createContext , useState} from 'react';
export const ThemeContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div
    className={darkMode ? 'container bg-dark text-white': 'container bg-white text-dark'} >
    <ThemeContext.Provider value={darkMode}>
      <Header />
      <Blog />
      <Footer />
      

      <button 
      onClick={()=>
      {setDarkMode(!darkMode);
      }} class="float">
         Dark Mode</button>
         </ThemeContext.Provider>
    </div>
  );
};

export default App;
