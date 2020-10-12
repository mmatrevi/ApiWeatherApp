import React, {useState} from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Loginform from './components/Forecast/Contents';

function App() {

  const [UserLoggedin, setUserLoggedin] = useState(false);

 return (
   <div className="App">
     <header className="App-header">
       <h1>React Weather App</h1>
       {!UserLoggedin && <Loginform setUserLoggedin={setUserLoggedin}/>}
     {UserLoggedin && <Forecast setUserLoggedin={setUserLoggedin}/>}
     </header>
     <main>
       
       
     </main>
   </div>
 );
}

export default App;
