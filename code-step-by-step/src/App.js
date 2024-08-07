import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import User from './User';

function App() {
  // let data="Bharat Kadam"
  const [data, setData] = useState(0);

  function Apple() {
    // setData('Suraj');
    setData(data+1)
    // alert(setData);
  }

  console.log("................");
  return (
    <div className="App">
      <h1>{data} !</h1>
      <button onClick={Apple}>Update Data</button>
      <button onClick={() => alert("hello second click button")}>Click me2</button>
      {/* <User/> */}
      {/* <User/>
      <User/>
      <User/> */}
    </div>
  );
}

export default App;
