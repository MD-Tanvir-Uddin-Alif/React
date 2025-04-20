import React from 'react';
const App = () => {
  const hudat = false;
  return (
    <div>
      {
        hudat?<h1>valo</h1>:<h1>valo na</h1>
      }
    </div>
  );
};

export default App;