import { useState } from 'react';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white font-poppins flex flex-col justify-center items-baseline h-screen w-full ">
          <div className='  bg-[#B4c170]  w-full h-full flex flex-col items-end justify-end rounded-b-3xl pr-6'>
            <h1 className=' tracking-widest text-white mt-32 text-3xl font-medium '>
              Bienvenidos a
            </h1>
            <h2 className='text-white mt-3 mb-20 text-3xl font-semibold tracking-widest ' > Qué Comemos</h2>
          </div>

            <div className="bg-white px-6 py-16 my-24 w-full h-full">
                <form>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Usuario</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                                className="w-full border-b-2 bg-white border-gray-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
                            />
                            <div className="absolute right-3 top-2 text-[#B4C170]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.293 17.293A12.07 12.07 0 0112 20a12.07 12.07 0 01-5.293-2.707M3 10a9 9 0 0016.345 5.659 3.99 3.99 0 001.057-2.902c-1.833.406-5.101-1.204-7.549-3.652a1 1 0 010-1.414c2.704-2.705 5.132-4.755 7.04-6.06 3.364-2.494 5.54-4.05 6.218-4.727a1 1 0 010 1.414c-.747.746-3.662 3.439-6.37 6.147a34.86 34.86 0 01-6.146 6.37c-1.819 1.295-4.294 2.865-7.02 4.71a1 1 0 01-1.414 0c-1.724-.954-3.823-2.204-5.704-3.688z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.293 4.293a1 1 0 011.414 0l14 14a1 1 0 01-1.414 1.414l-14-14a1 1 0 010-1.414z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-[#B4C170] text-white py-5 px-4 rounded-full mt-4 hover:bg-[#9ca85f] w-full">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};


