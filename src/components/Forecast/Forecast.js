import React, { useState } from 'react';

function Forecast({setUserLoggedin}) {

   let [responseObj, setResponseObj] = useState({});

    function Logoutfunction(){
        setUserLoggedin(false)
    }

   function getForecast() {
      // weather data fetch function will go here
      fetch("http://api.weatherstack.com/historical" , {
        access_key : '62e0e4da08472ce1fcc145bc5ca5e982',
        query : 'New York',
        historical_date : '2015-21-0',
        
    })
    .then(response => response.json())
    .then(response => {
    setResponseObj(response)
    })
    .catch(err => {
        console.log(err);
    })
   }

   return (
       // JSX code will go here
       <div>
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>

           <br></br>
           <button onClick={Logoutfunction}>Logout</button>
            
            <br></br>

            <label>Logged in</label>
       </div>

   )
}

export default Forecast;