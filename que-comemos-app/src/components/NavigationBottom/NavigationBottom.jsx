import { NavigationItem } from "../NavigationItem/NavigationItem";

export const NavigationBottom = () => {
  return (
    <div className="fixed bottom-0 py-4  z-50 w-full bg-white border-t border-gray-200 left-9">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto items-center justify-center">
        <NavigationItem to="/"  icon="Home" />
        <NavigationItem to="/saved-recipes"  icon="bookmark" />
        <NavigationItem to="/recipe-search"  icon="search" />
        <NavigationItem to="/user-profile"  icon="person" />
      </div>
    </div>
  );
};
