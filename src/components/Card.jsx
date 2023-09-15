import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ datos }) => {
  const navigate = useNavigate();

  const addFav = (newItem) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const newFav = [...favoritos, newItem];

    if (!favoritos.some((item) => item.id === newItem.id)) {
      localStorage.setItem("favoritos", JSON.stringify(newFav));
    }
  };

  const removeFav = (itemId) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const updatedFav = favoritos.filter((item) => item.id !== itemId);
    localStorage.setItem("favoritos", JSON.stringify(updatedFav));
  };

  // Estado para mantener un conjunto de elementos marcados como favoritos
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return new Set(storedFavoritos.map((item) => item.id));
  });

  const handleClick = (item) => {
    navigate(`/dentist/${item.id}`);
  };

  const handleFavButtonClick = (item) => {
    if (favoritos.has(item.id)) {
      // Si ya es favorito, quítalo
      removeFav(item.id);
      setFavoritos((prevFavoritos) => {
        const newFavoritos = new Set(prevFavoritos);
        newFavoritos.delete(item.id);
        return newFavoritos;
      });
    } else {
      // Si no es favorito, agrégalo
      addFav(item);
      setFavoritos((prevFavoritos) => {
        const newFavoritos = new Set(prevFavoritos);
        newFavoritos.add(item.id);
        return newFavoritos;
      });
    }
  };

  useEffect(() => {
    // Actualizar el estado de favoritos cuando se modifica el localStorage
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(new Set(storedFavoritos.map((item) => item.id)));
  }, []);

  return (
    <div className="card-grid">
      {datos.map((item) => (
        <div key={item.id}>
          <div className="card" onClick={() => handleClick(item)}>
            <img src="./public/images/doctor.jpg" className="card-img" alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.username}</p>
          </div>
          <button className="favButton" onClick={() => handleFavButtonClick(item)}>
            {favoritos.has(item.id) ? "Favorito" : "Añadir a favoritos"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;