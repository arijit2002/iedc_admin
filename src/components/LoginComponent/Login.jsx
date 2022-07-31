import React from "react";
import { Redirect} from 'react-router-dom';
import "./login.css";
import { useState } from 'react';
import logo from "../../assets/logo8.png";
 
function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
 
  const login = (e) => {
    e.preventDefault();
    console.log(name, password);
    const userData = {
      name,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setName('');
    setPassword('');
  };
 
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };
 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {!isLoggedin ? (
          <>
          <div className="App">
          <img src={logo} className="logo" alt="Business view - Reports" />
            <form action="" className="form">
                <div className="input-group">
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name"/>
                </div>
              <div className="input-group">
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"/>
              </div>
              <button className="login" type="submit" onClick={login}>Login</button>
            </form>
         </div>
          </>
        ) : (
          <>
          <Redirect to="/dashboard" />
          </>
        )}
      </div>
    </>
  );
}

export default App;