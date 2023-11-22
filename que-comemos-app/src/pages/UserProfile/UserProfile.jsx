import { useContext, useEffect } from 'react'
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { UserProfileInfo } from "./components/UserProfileInfo";
import { useNavigate } from "react-router-dom";
import UsuarioContext from '../../context/usuarios/usuarioContext';
import { HeaderUser } from './components/HeaderUser';

export const UserProfile = () => {

  const { id } = useContext(UsuarioContext)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) navigate('/login')
  }, [])

  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline min-h-screen w-full">
      <HeaderUser page="Datos personales"/>
      <UserProfileInfo/>
      <NavigationBottom />
    </div>
  );
};