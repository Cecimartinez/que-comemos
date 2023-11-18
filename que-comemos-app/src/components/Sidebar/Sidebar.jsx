
import React, { useContext } from "react"
import { AlignLeft, User2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/Sheet"
import { Link, useNavigate } from "react-router-dom"
import UsuarioContext from "../../context/usuarios/usuarioContext"

export const Sidebar = () => {

  const { email, name, lastname, cerrarSesion } = useContext(UsuarioContext)

  const navigate = useNavigate()

  const SHEET_SIDES = ["left"]

  const handleLogout = () => {
    cerrarSesion()
    navigate('/login')
  }

  return (
    <div className="flex justify-start  items-start ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <AlignLeft className="text-white w-10 h-10" />
          </SheetTrigger>
          <SheetContent className="bg-white font-poppins flex flex-col justify-between items-center" side={side}>

            <div className="flex my-14 items-center flex-col ">
              <section className=" py-4 bg-[#B4c170] rounded-full  my-4 justify-center items-center px-4">
                <User2 className="w-full  text-white" />
              </section>

              <div className="flex flex-col justify-start mx-3  items-start  text-neutral-600 tracking-wider">
                <h2 className="text-xl  font-medium ">{name} {lastname}</h2>
              </div>
              <h3 className="text-sm">{email}</h3>

            </div>

            <div className="my-10 border-2 px-10 shadow-lg py-7 rounded-5xl  cursor-pointer bg-[#B4c170]">
              <button onClick={handleLogout} className="text-lg tracking-wider text-white w-full h-full font-medium ">Cerrar Sesión</button>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}