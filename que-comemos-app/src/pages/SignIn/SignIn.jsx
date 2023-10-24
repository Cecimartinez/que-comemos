import { ProfileForm } from "../../components/Form/Form"

export const SignIn =()=>{
  return(
    <div className="bg-[#B4c170] w-full h-screen flex flex-col justify-center items-center">
    <h1 className=" my-20 text-3xl text-[#fff] font-poppins font-medium">
      Crear cuenta
    </h1>
    
    <ProfileForm />
    </div>
  )
}