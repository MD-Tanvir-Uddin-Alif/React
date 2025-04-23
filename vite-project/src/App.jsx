import React, { useRef, useState } from 'react';
import Hero from './component/Hero'

const App = () => {
  const [number, setsumber] = useState(0);

  return (
    <div>
      <h1>number:{number}</h1>
      <button onClick={()=>setsumber(number+1)}>click me</button>
    </div>
  );
};

export default App;