export const UserForm = () => {
  return (
      <form className=' py-10 px-8  text-neutral-500 flex-col  flex items-center justify-center '>

        <div className="mb-6 " >
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

        <div className="mb-6 " >
          <label htmlFor="email" className="block font-medium">Fullname</label>
          <div className="relative">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Full Name"
              className="w-full border-b-2 bg-white placeholder-neutral-400  border-neutral-300 focus:border-[#B4C170] focus:outline-none py-2 pl-1"
            />
          
            </div>
          </div>
 
      </form>
  )
} 