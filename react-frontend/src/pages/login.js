import React, { Component } from 'react'
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class login extends Component {
  render() {
    return (
      <div>
        <div className="login-container" >
            <div className="login-form">
                <p className='titulo'>Iniciar Sesión </p>
                <label>Nombre de Usuario</label>
                <input type="email" />
                <label>Contraseña</label>
                <input type="password"/>
                <label>Agencia</label>
                <select>
                    <option value="option1">Opción 1</option>
                    <option value="option2">Opción 2</option>
                    <option value="option3">Opción 3</option>
                </select>
                <div className='container-button'>
                    <input className='remember' type="checkbox" id="rememberMe"  />
                    <label htmlFor="rememberMe">Recordar Contraseña</label>
                  <button>Iniciar Sesión</button>
                </div>
            </div>
            <div className="login-image">
                <img src="https://img.freepik.com/free-photo/face-recognition-personal-identification-collage_23-2150165617.jpg?t=st=1716974237~exp=1716977837~hmac=ea721dd64b1577f9c7be96594803216ee4d00b831708ab558f9e81eb6f4c9240&w=740" alt="Descripción de la imagen" />
            </div>
        </div>
      </div>
    );
  }
}
