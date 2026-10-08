import image from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <div className="flex items-center justify-between w-full bg-gray-400">
      <div className="flex flex-row items-center">
        <img src={image} alt="" className="w-15 h-15" />
        <div>NavBar</div>
      </div>
      <ColorModeSwitch />
    </div>
  );
}

export default NavBar;
