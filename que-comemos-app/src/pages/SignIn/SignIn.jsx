import { ProfileForm } from "../../components/Form/Form"

export const SignIn = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-between pb-10 items-center">
      <div className="bg-[#B4c170] w-full h-full flex-col rounded-b-5xl tracking-widest px-5 font-poppins text-white flex justify-center items-start">
        <h1 className=" mt-16 text-3xl   font-medium">
          Creá tu cuenta 
        </h1>
        <h2 className="my-5 font-normal">
          Y explorá las mejores recetas al alcance de tu mano 
        </h2>
      </div>
      <ProfileForm />
    </div>
  )
}