import { useContext } from "react";
import { Modal } from "../../../components/ui/Modal";

import UsuarioContext from '../../../context/usuarios/usuarioContext'

export const UserProfileInfo = () => {

  const { id, email, name, lastname } = useContext(UsuarioContext)

  return (
    <div className="px-10  flex justify-center items-center w-full">
      <div className="w-full max-w-md border-neutral-200 border  shadow-xl  py-10 rounded-xl px-5">
        <div className="flex flex-col items-center">
          {/* <div className="w-24 h-24 rounded-full border">
            <img src="./profile.png" alt="Profile" />
          </div> */}
          <p className="text-2xl  text-neutral-700 my-5">{name} {lastname}</p>
        </div>

        <div className="flex flex-col  py-4 px-5 items-start tracking-wider">
          <label htmlFor="email" className="block font-medium text-xl text-neutral-700">Email</label>
          <p className="mt-1 mb-3 text-neutral-500">{email}</p>
          <label htmlFor="fullname" className="block text-xl font-medium text-neutral-700">Nombre</label>
          <p className="mt-1 mb-3 text-neutral-500">{name}</p>
          <label htmlFor="fullname" className="block font-medium text-neutral-700 text-xl">Apellido</label>
          <p className="mt-1 mb-3 text-neutral-500">{lastname}</p>
        </div>

        <div>
          <Modal id={id} email={email} name={name} lastname={lastname}/>
        </div>
      </div>
    </div>
  );
};