import React,{ useState } from "react";


function Loginform({setUserLoggedin}) {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    
    function Usernamefunction(event){
        setUsername(event.target.value)
    }

    function Passwordfunction(event){
        setPassword(event.target.value)
    }
          
    function Submitfunction(event){
        event.preventDefault();
 
        if (Username === 'mike' && Password ==='mike'){
            setUserLoggedin(true);
        };
        

    }

    return(
       <div className='Loginform'>
          <label>Username:</label>
          <input style={{margin:'20px',width:'350px', height:'30px'}} type='text' value={Username} onChange={Usernamefunction} placeholder='Enter your username'></input>
            
          <br></br>  
         <label>Password:</label>  
        <input style={{margin:'20px',width:'350px', height:'30px'}} type='text' value={Password} onChange={Passwordfunction} placeholder='Enter your password'></input>
       <br></br>
        <button style={{fontSize:'30px', marginLeft:'150px'}} onClick={Submitfunction}>Login in</button>
       </div>
    );
}

export default Loginform;