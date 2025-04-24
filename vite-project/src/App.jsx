import React, { useRef, useState } from 'react';
import Hero from './component/Hero'

const App = () => {
  const [newOBJ, setOBJ] = useState({
    key1:"value 1",
    key2:"value 2",
    key3:"value 3",
  });

  const change = ()=>{
    setOBJ(
      preobj =>({
        ...preobj,
        key1:"new value 1",
        key2:"new value 2",
      })
    )
  }

  return (
    <div>
      <h1>New Object:{newOBJ.key1}</h1>
      <h1>New Object:{newOBJ.key2}</h1>
      <h1>New Object:{newOBJ.key3}</h1>
      <button onClick={change}>click me</button>
    </div>
  );
};

export default App;