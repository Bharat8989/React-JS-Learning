import logo from './logo.svg';
import './App.css';
import Student from './Student'
function App() {
  return (
    <div className="App">
      <h1>props in React :)</h1>
      <Student name='bharat' email='bharat23@gmail.com'/>
      <Student name='suraj' email='bharat23@gmail.com'/>
      <Student name='Pavan' email='bharat23@gmail.com'/>
      
      
      {/* <Student name='suraj'/>
      <Student name='Pavan'/> */}
    </div>
    
  );
}

export default App;
