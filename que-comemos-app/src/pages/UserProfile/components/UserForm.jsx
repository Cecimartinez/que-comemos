import React, { useState} from 'react'

export const UserForm = ({ datos, setDatos }) => {

  const handleChangeEmail = (e) => {
    setDatos({ 
      ...datos,
      email: e.target.value
    })
  }

  const handleChangeName = (e) => {
    setDatos({ 
      ...datos,
      name: e.target.value
    })
  }

  const handleChangeLastName = (e) => {
    setDatos({ 
      ...datos,
      lastname: e.target.value
    })
  }

  return (
      <form className=' py-10  bg-white  text-neutral-800 flex-col w-full  flex items-center justify-center '>

        <div className="mb-6  w-full  lg:px-24"  >
          <label htmlFor="email" className="block  font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={datos.email}
              onChange={handleChangeEmail}
              placeholder="Correo electrónico"
              className="w-full border-b-2 bg-white placeholder-neutral-400 border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
          </div>
        </div>

        <div className="mb-6  w-full  lg:px-24" >
          <label htmlFor="name" className="block font-medium">Nombre</label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={datos.name}
              onChange={handleChangeName}
              placeholder="Nombre"
              className="w-full border-b-2 bg-white placeholder-neutral-400  border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
            </div>
          </div>

          <div className="mb-6  w-full  lg:px-24" >
          <label htmlFor="lastname" className="block font-medium">Apellido</label>
          <div className="relative">
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={datos.lastname}
              onChange={handleChangeLastName}
              placeholder="Apellido"
              className="w-full border-b-2 bg-white placeholder-neutral-400  border-neutral-300  focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
            </div>
          </div>
 
      </form>
  )
} 