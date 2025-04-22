import React from 'react';
import Hero from './component/Hero'

const baker_fun = () =>{
  alert("parent class theke bolci");
};

const App = () => {
  return (
    <div>
      {
        <Hero hudai={baker_fun}/>
      }
    </div>
  );
};

export default App;