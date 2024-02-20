




import React, { useState } from 'react';

import {Link} from 'react-router-dom'
export default function Signup() {
  const [email, setEmail] = useState('');
  const [name,setName]=useState({email1:''})
  function enterEmail() {
    if (email === '') {
      setName({...name,email1:'enter'})
      console.log('lk')
    }
    else {
      setName({...name,email1:''})
    }
  }
  return (
 
      <div style={{margin:'390px 90px'}}>
      email:<input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        {name.email1 ? (<p>{name.email1}</p>) : (<></>)}
        <br></br>  
      <button onClick={enterEmail}> but</button>
    </div>
  
  )
}

