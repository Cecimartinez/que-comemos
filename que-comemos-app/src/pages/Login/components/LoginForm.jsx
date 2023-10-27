import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className=' flex-col '>
      <div className="mb-6 " >
        <label htmlFor="email" className="block text-gray-700 font-semibold">Usuario</label>
        <div className="relative">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full border-b-2 bg-white b border-gray-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
          />
          <div className="absolute right-3 top-2 text-[#B4C170]">
            <span className="material-symbols-outlined">
              done
            </span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block font-semibold text-gray-700">Contraseña</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Contraseña"
            className="w-full border-b-2 bg-white border-gray-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
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
      <Link to="/" type="submit" className="bg-[#B4C170] shadow-xl uppercase text-white py-5 flex justify-between text-lg  px-10 rounded-full my-8 hover:bg-[#9ca85f] w-full">Iniciar Sesión <span className="text-lg material-symbols-outlined">
        arrow_right_alt
      </span>
      </Link>
      <div className='flex w-full justify-center'>
        <Link to="/sign-in" className='cursor-pointer text-[#B4C170] text-center h-full  text-lg font-semibold'>Crear Cuenta </Link>

      </div>
    </form>
  )
}