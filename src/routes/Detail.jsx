// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../components/utils/GlobalContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { value } = useContext(GlobalContext);
  const { id } = useParams();
  const [datos, setDatos] = useState([]);

  async function handleFetch() {
    const response = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    ).json();
    setDatos(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className={value.theme === "light" ? "" : "dark"}>
      <div className="card-grid">
        <div className="card-detail">
        <img src="/images/doctor.jpg" className="card-detail-img"/>
          <div className="text-align">
          <h2>{datos.name}</h2>
          <p>{datos.email}</p>
          <p>{datos.phone}</p>
          <p>{datos.website}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;