import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
  let data="Bharat Kadam"
  function Apple(){
    alert("functions called ")
  }
  return (
    <div className="App">
      <h1>{data} !</h1>

      <button onClick={Apple}>Click me</button>
      <button onClick={()=>(alert("hello second click button"))}>Click me2</button>
      {/* <User/> */}
      {/* <User/>
      <User/>
      <User/> */}
    </div>
  );
}



export default App;
