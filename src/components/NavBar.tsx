import image from "../assets/logo.webp";
function NavBar() {
  return (
    
      <div className = "flex items-center" >
        <img src={image} alt="" className="w-15 h-15" />
        <div>NavBar</div>
      </div>
    
  );
}

export default NavBar;
