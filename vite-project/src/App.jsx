import React, { useRef } from 'react';
import Hero from './component/Hero'

const App = () => {
  let my = useRef(0);
  const baler_button = () => {
    let heda = my.current++;
    console.log(heda);
  }

  return (
    <div>
      <button onClick={baler_button}>thela de</button>
    </div>
  );
};

export default App;