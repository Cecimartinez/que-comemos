import React, { useEffect, useState, useContext } from 'react'
import { UserForm } from "../../pages/UserProfile/components/UserForm"
import usePutData from '../../services/auth/usePutData'
import UsuarioContext from '../../context/usuarios/usuarioContext'

export const Modal = ({ id = '', email = '', name = '', lastname = '' }) => {

  const { isLoading, data, isError, callApi } = usePutData()

  const { setFullName, setEmail } = useContext(UsuarioContext)

  const [datos, setDatos] = useState({
    id,
    email,
    name,
    lastname
  })

  useEffect(() => {
    if (isError) {
      console.log({ data })
    }
    if (!isLoading && data?.success) {
      const { name, lastname, email } = data?.data
      setFullName(name, lastname)
      setEmail(email)
      document.getElementById('my_modal_4').close()
    }
  }, [data, isError, isLoading])

  const handleCancelar = (e) => {
    e.preventDefault()
    document.getElementById('my_modal_4').close()
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    callApi(datos)
  }

  return (

    <div className="bg-white flex justify-center w-full items-center mt-6  " >

      <button className="btn bg-[#B4C170] border-[#B4C170] text-white tracking-wide hover:bg-[#9ba75f] hover:border-[#9ba75f] " onClick={() => document.getElementById('my_modal_4').showModal()}>Editar Datos</button>

      <dialog id="my_modal_4" className="modal ">

        <div className="modal-box w-11/12 max-w-5xl bg-white text-neutral-800">

          <h3 className="font-medium text-lg">Actualizar datos personales</h3>

          <UserForm datos={datos} setDatos={setDatos} />

          <div className="modal-action w-full">

            <form method="dialog w-full">

              <button
                className="btn border-0 shadow-lg mr-2 bg-white text-[#B4C170] hover:text-white hover:bg-[#9ba75f] hover:border-[#9ba75f]"
                onClick={handleCancelar}
              >
                Cancelar
              </button>

              <button
                className="btn border-0 shadow-lg bg-[#B4C170] text-white hover:bg-[#9ba75f] hover:border-[#9ba75f]"
                onClick={handleUpdate}
              >
                Actualizar
              </button>

            </form>

          </div>

        </div>

      </dialog>

    </div>

  )
}