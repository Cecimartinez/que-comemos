import { Link } from "react-router-dom"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { Modal } from "../../components/ui/Modal"

export const UserProfile = () => {
  return (
    <div className=" bg-white font-poppins flex flex-col  justify-center items-baseline h-screen w-full">

      <div className=" text-white w-full top-0 pt-8 pb-16 rounded-b-5xl absolute px-4  bg-[#B4C170] flex items-start justify-between">
        <Link to="/" className="text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          Home
        </Link>
        <h1 className="text-lg  font-medium "> Perfil del usuario</h1>
      </div>





      <div className="px-10  py-20  flex justify-center items-center w-full ">
        <div className=" flex flex-col w-full items-center justify-center border-neutral-200 border bg-white shadow-xl py-20 rounded-xl px-5">
          <div className="flex items-center justify-center flex-col ">
            <div class="avatar online my-5 mx-3">
              <div class="w-24 rounded-full border ">
                <img src="././profile.png" />
              </div>
            </div>
            <p className="text-2xl font-medium text-neutral-500 mx-2 my-5">Valentina Martinez</p>

          </div>

          <div className=" flex flex-col text-lg py-t px-5 justify-center items-start tracking-wider ">
            <label htmlFor="email" className="block  font-medium text-neutral-500">Email</label>
            <p className="my-5">valmar@gmail.com</p>
            <label htmlFor="email" className="block  font-medium text-neutral-500">Fullname</label>
            <p className="my-5">Valentina Martinez</p>
          </div>

          <div>
            <Modal />
          </div>
        </div>
      </div>



      <NavigationBottom />

    </div>
  )
}