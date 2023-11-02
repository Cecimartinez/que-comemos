import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline h-screen  w-full ">
      <div className='bg-[#B4c170] w-full h-full flex flex-col items-end justify-end rounded-b-5xl pr-6 md:w-full   '>
        <h1 className='tracking-widest text-white mt-16 md:mt-11 text-4xl font-medium'>
          Bienvenidos a
        </h1>
        <h2 className='text-white mt-3 mb-20 md:mb-16 text-3xl font-medium tracking-widest'>
          Qué Comemos
        </h2>
      </div>

      <div className="bg-white px-10 py-16 my-24 w-full h-full  md:justify-center md:px-60 md:my-8">
        <LoginForm />
      </div>
    </div>
  );
};
