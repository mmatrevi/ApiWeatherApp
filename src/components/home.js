import React from "react";

function Home({setUserLoggedin}) {

    function Logoutfunction(){
        setUserLoggedin(false)
    }

        function getForecast() {
           // weather data fetch function will go here
        
        }


   return(
        // JSX code will go here

        

           <div className='Searchbox'>   
            <p style={{fontSize:'40px', paddingLeft:'49px'}}>Temp 25degrees</p>
            <p><input style={{margin:'20px',width:'350px', height:'30px'}} type='text' placeholder='enter your cities name'></input></p>
            
            <button style={{fontSize:'30px', marginLeft:'150px'}}>Search</button>
            <br></br>

            <br></br>
           <button style={{fontSize:'30px', marginLeft:'150px'}} onClick={Logoutfunction}>Logout</button>
       </div>
   );
}

export default Home;