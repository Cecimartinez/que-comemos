import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../login.api';
import { Button } from '@mui/material';
import UsuarioContext from '../../../context/usuarios/usuarioContext';

import usePostLogin from '../../../services/auth/usePostLogin'

export const LoginForm = () => {

  const { iniciarSesion } = useContext(UsuarioContext)

  const { isLoading, isError, data, callApi } = usePostLogin()

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    if(isError){
      console.log(data)
    }
    if(!isLoading && data?.success && data?.data?.estado){
      const { id, token, name, lastname } = data.data
      iniciarSesion(id, email, token, name, lastname)
      navigate('/')
    }
  }, [isError, data, isLoading])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    callApi({email, password})
  };

  return (
    <form className=' flex-col ' onSubmit={handleLogin}>
      <div className="mb-6 " >
        <label htmlFor="email" className="block text-neutral-700 font-medium text-xl">Usuario</label>
        <div className="relative">
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full border-b-2 bg-white b border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
            onChange={handleEmailChange}
          />
          <div className="absolute right-3 top-2 text-[#B4C170]">
            <span className="material-symbols-outlined">
              done
            </span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-xl font-medium  text-neutral-700">Contraseña</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            id="password"
            name="password"
            placeholder="Contraseña"
            className="w-full border-b-2 bg-white border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 "
            onChange={handlePasswordChange}
          />
          <div
            className="absolute right-3 top-2 text-[#B4C170] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <span className="material-symbols-outlined">
                visibility_off
              </span>
            ) : (
              <span className="material-symbols-outlined">
                visibility
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <button type="submit">Iniciar sesion</button> */}
      <button
        type="submit"
        className="bg-[#B4C170] shadow-xl uppercase text-white py-5  text-center text-lg  px-10 rounded-full my-8 hover:bg-[#9ca85f] w-full"
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
      {/* <Link to="/" type="submit" className="bg-[#B4C170] shadow-xl uppercase text-white py-5 flex justify-between text-lg  px-10 rounded-full my-8 hover:bg-[#9ca85f] w-full">Iniciar Sesión <span className="text-lg material-symbols-outlined">
        arrow_right_alt
      </span>
      </Link> */}
      <div className='flex w-full justify-center'>
        <Link to="/sign-in" className='cursor-pointer text-[#B4C170] text-center h-full  text-lg font-medium'>Crear Cuenta </Link>

      </div>
    </form>
  )
}