import React, { useContext, useEffect } from 'react'
import { Header } from "../../components/Header/Header";
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { UserProfileInfo } from "./components/UserProfileInfo";
import { useNavigate } from "react-router-dom";
import UsuarioContext from '../../context/usuarios/usuarioContext';

export const UserProfile = () => {

  const { id } = useContext(UsuarioContext)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) navigate('/login')
  }, [])

  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline min-h-screen w-full">
      <Header page="Datos personales"/>
      <UserProfileInfo/>
      <NavigationBottom />
    </div>
  );
};