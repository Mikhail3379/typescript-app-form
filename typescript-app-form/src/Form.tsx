import React from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";
function Form  () {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitForm = (event: any) => {
    event.preventDefault()
    let body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
      
    if (password !== confirmPassword) return;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    fetch("http://localhost:9000/app/addNewClients", requestOptions)
      .then((response) => response.json())
      Swal.fire({
        icon: "success",
        title: "You have successfully registered",
        showConfirmButton: false,
        timer: 1500,
      }); 
      
  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <div className="container">
    <form onSubmit={submitForm}>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        
        required />
        <br />
        <label>Last Name</label>
        <input type="text" value={lastName} 
        onChange={(e) => setLastName(e.target.value)}
        required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" value={email} 
        placeholder='email' 
        onChange={(e) => setEmail(e.target.value)}
        required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password}  placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required/>
        
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword}
        placeholder='Confirm Password'
        onChange={(e) => setConfirmPassword(e.target.value)}
        
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default Form;
