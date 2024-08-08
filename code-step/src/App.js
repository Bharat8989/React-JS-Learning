import logo from './logo.svg';
import './App.css';
// import Student from './Student'
import React  from 'react'

function App() {
  const [status,setStatus]=React.useState(false)
//   const [data,setData]=useState(null)

//   function getData(val){
//     console.log(val.target.value)
//     setData(val.target.value)
//   }
  return (
    <div className="App">
      {
           status? <h1>Hello world!</h1>:null
      }
     {/* <h1>hello world</h1> */}
     {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
     <button onClick={()=>setStatus(!status)}>toggel</button>

    </div>
    
  );
}

export default App;
 