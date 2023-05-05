import React, { useState } from 'react';
import User from '../../assets/user.png';

import loginAcess from '../../utils/loginAcess';

import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    if ( data.email === loginAcess.email && data.password === loginAcess.password){
      alert(`Access Released `+ data.email);
    } else {
      alert("Access Denied, Sign Up")
    }
  }
  return (
    <div className="logon-container" >
      <section className="form">
        <img src={User} alt="user"/>

        <form onSubmit={handleSubmit}>
          <h1>
          </h1>
          <input
            type="email"
            placeholder="E-mail: "
            className="inputLogin"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
          <h1>
          </h1>
          <input
            type="password"
            placeholder="Senha"
            className="inputLogin"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
          <div className='footer'>
            <a href="/" className="ultimo">Cadastrar</a>

            <a href="/" className="ultimo">Esqueci a senha</a>
          </div>
            <button className="button" type="submit">Login</button>
        </form>

      </section>
    </div >
  );
}