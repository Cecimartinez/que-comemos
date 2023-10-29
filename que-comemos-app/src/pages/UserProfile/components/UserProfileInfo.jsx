import { Modal } from "../../../components/ui/Modal";

export const UserProfileInfo = () => {
  return (
    <div className="px-10 pt-16  flex justify-center items-center w-full">
      <div className="w-full max-w-md border-neutral-200 border bg-white shadow-xl  py-20 rounded-xl px-5">
        <div className="flex flex-col items-center">
          <div className="avatar online my-5 mx-3">
            <div className="w-24 h-24 rounded-full border">
              <img src="./profile.png" alt="Profile" />
            </div>
          </div>
          <p className="text-2xl font-medium text-neutral-500 my-5">Valentina Martinez</p>
        </div>

        <div className="flex flex-col text-lg py-4 px-5 items-start tracking-wider">
          <label htmlFor="email" className="block font-medium text-neutral-500">Email</label>
          <p className="my-1">valmar@gmail.com</p>
          <label htmlFor="fullname" className="block font-medium text-neutral-500">Fullname</label>
          <p className="my-1">Valentina Martinez</p>
        </div>

        <div>
          <Modal />
        </div>
      </div>
    </div>
  );
};