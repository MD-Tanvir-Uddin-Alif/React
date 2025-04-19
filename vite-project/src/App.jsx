import React from 'react';
import Header from './component/Header';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Footer from './component/Footer';
const App = () => {
  let food = ['vaat', 'mangso', 'junk', 'misti', 'baal'];
  return (
    <div>
      <ul>
        {
          food.map((khabar,i)=>{
            return <li key={i.toString()}>{khabar}</li>
          })
        }
      </ul>
    </div>
  );
};

export default App;