import React, { useState } from 'react'
import './App.css'
export default function SignUp() {
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [pass,setPass]=useState("");
    let res={user,email,phone,pass};
   function handleSubmit(){
       console.log(res);
       alert(`Welcome ${user}`);
   }
   function handleChange(e){
    e.preventDefault();
    let val=e.target.value;
    let check=e.target.name;
     if(check==='username'){
         setUser(val);
     }else if(check==='password'){
        setPass(val);
     }else if(check==='email'){
        setEmail(val);
     }else{
        setPhone(val)
     }
   }
  return (
    <div className='spage'>
      <h2 className='title'>SignUp form</h2>
      <div className="data">
        <form onSubmit={handleSubmit} className='sform'>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id='username' onChange={handleChange} autoFocus required/> <br />
            <label htmlFor="password">Password :</label>
            <input type="password" required onChange={handleChange} name="password" id="password" /> <br />
            <label htmlFor="phone">Phone No.:</label>
            <input type="text" required onChange={handleChange} name="phone" id='phone'/> <br />
            <label htmlFor="email">Email ID  : </label>
            <input type="email" required onChange={handleChange} name="email" id='email'/> <br />
            
            <button className='sbtn'>Login</button>
        </form>
      </div>
    </div>
  )
}
