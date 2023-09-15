import { useContext, useEffect } from "react";
import { GlobalContext } from "./utils/GlobalContext";
import { Link } from "react-router-dom";

const Navbar = () => {

   const { value } = useContext(GlobalContext);

   //console.log(value.theme);

  const changeTheme = () => {
    value.dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    localStorage.setItem("theme", value.theme);
  }, [value.theme]);
  

  return (
    <nav className="nav">      
      <Link to='/home'>Odontologos</Link>
      <Link to='/contact'>Contacto</Link>
      <Link to='/favs'>Favoritos</Link> 
      <button onClick={changeTheme} className="button-container">{value.theme === "dark" ? (
    <span role="img" aria-label="light" className="sun-icon">
      ☀️
    </span>
  ) : (
    <span role="img" aria-label="dark" className="moon-icon">
      🌙
    </span>
  )}</button>
    </nav>
  );
};

export default Navbar;