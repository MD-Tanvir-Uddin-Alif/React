import React, { useEffect, useRef, useState } from 'react';
import Hero from './component/Hero'

const App = () => {
  const [Data, setData] = useState([]);

  useEffect( ()=>{
    (async ()=>{
      let responce = await fetch("https://dummyjson.com/products");
      let data = await responce.json();
      setData(data);
    })()

  },[])

  return (
    <div>
      {JSON.stringify(Data)}
    </div>
  );
};

export default App;