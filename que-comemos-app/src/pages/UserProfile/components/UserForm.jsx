export const UserForm = () => {
  return (
      <form className=' py-10  bg-white  text-neutral-800 flex-col w-full  flex items-center justify-center '>

        <div className="mb-6  w-full  lg:px-24"  >
          <label htmlFor="email" className="block  font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full border-b-2 bg-white placeholder-neutral-400 border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
          </div>
        </div>

        <div className="mb-6  w-full  lg:px-24" >
          <label htmlFor="email" className="block font-medium">Nombre</label>
          <div className="relative">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Nombre"
              className="w-full border-b-2 bg-white placeholder-neutral-400  border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
            </div>
          </div>

          <div className="mb-6  w-full  lg:px-24" >
          <label htmlFor="text" className="block font-medium">Apellido</label>
          <div className="relative">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Apellido"
              className="w-full border-b-2 bg-white placeholder-neutral-400  border-neutral-300  focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
            </div>
          </div>
 
      </form>
  )
} 