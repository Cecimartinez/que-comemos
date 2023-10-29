import { NavigationItem } from "../NavigationItem/NavigationItem";

export const NavigationBottom = () => {
  return (
    <div className="fixed bottom-0 py-4  z-50 w-full bg-white border-t border-gray-200  justify-center items-center">
      <div className=" h-full max-w-lg gap-20 mx-auto  flex items-center justify-center">
        <NavigationItem to="/"  icon="Home" />
        <NavigationItem to="/saved-recipes"  icon="bookmark" />
        <NavigationItem to="/recipe-search"  icon="search" />
        <NavigationItem to="/user-profile"  icon="person" />
      </div>
    </div>
  );
};
