import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import UseState from './Hook/UseState.jsx'

import './index.css'
import Index from './UseReducer/index.jsx'
// import Login from './Login/Login.jsx'
// import SignUp from './Registratonsfrom/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseState/> */}
   {/* <SignUp/> */}
   {/* <Login/> */}
   <Index/>
  </StrictMode>,
)
