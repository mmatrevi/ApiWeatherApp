import React, { useState } from 'react';

const Forecast = ({setUserLoggedin}) => {

    let [responseObj, setResponseObj] = useState({});

    function Logoutfunction(){
        setUserLoggedin(false)
    }

   function getForecast() {
      // weather data fetch function will go here
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?lat=0&lon=0&callback=test&id=2172797&lang=null&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "9a37cde1acmshd706ad3a51045dep1921a1jsne27a4f2cef2e"
	}
})
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       });
   }

   return (
       // JSX code will go here
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>

           <br></br>
           <button onClick={Logoutfunction}>Logout</button>
            
            <br></br>

            <label>Logged in</label>
       </div>

   )
}

export default Forecast;