import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../components/utils/GlobalContext";


const Fav = () => {
  const { value } = useContext(GlobalContext);
  const [datos, setDatos] = useState([]);
  

  useEffect(() => {
    // Cargar datos de favoritos desde el localStorage cuando el componente se monta
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setDatos(favoritos);
  }, []);

  const removeFav = (existItem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const updatedFavoritos = favoritos.filter((item) => item.id !== existItem.id);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    setDatos(updatedFavoritos);
    };
    

  return (
    <main className={value.theme === "light" ? "" : "dark"}>
      <h1>Mis favoritos</h1>
      <div className="card-grid">
        {datos.map((item) => (
          <div key={item.id}>
            <div className="card">
            <img src="./public/images/doctor.jpg" className="card-img"/>
              <h3>{item.name}</h3>
              <p>{item.username}</p>
            </div>
            <button className="favButton" onClick={() => removeFav(item)}>
            Quitar de favoritos
          </button>
          </div>
          
        ))}
      </div>
    </main>
  );     
};

export default Fav;