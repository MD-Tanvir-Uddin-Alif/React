import React from 'react';
import Hero from './component/Hero'
const App = () => {
  const hudat = {
    nameIs : "jani na",
    age : 23,
    language : "bal"
  };
  return (
    <div>
      {
        <Hero hudai={hudat}/>
      }
    </div>
  );
};

export default App;