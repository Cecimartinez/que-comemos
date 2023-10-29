import { Header } from "../../components/Header/Header";
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { UserProfileInfo } from "./components/UserProfileInfo";

export const UserProfile = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline min-h-screen w-full">
      <Header/>
      <UserProfileInfo/>
      <NavigationBottom />
    </div>
  );
};