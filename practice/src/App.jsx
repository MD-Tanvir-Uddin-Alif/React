import { useRef, useState } from "react"


function App() {
  const [list, setlist] = useState([]);
  const userInput = useRef();

  const change = ()=>{
    setlist(
      [...list, userInput.current.value]
    );
  };



  return (
    <>
      <div>
        <input type="text" name="" id="" ref={userInput}/>
        <button onClick={change}>click me</button>
        <p>the input you provided : {list}</p>
        <h1>Hii</h1>
      </div>
    </>
  )
}

export default App
