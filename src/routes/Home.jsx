import React, {useContext, useEffect, useState} from 'react';
import Card from '../components/Card'
import { GlobalContext } from "../components/utils/GlobalContext";

const Home = () => {

  const { value } = useContext(GlobalContext);

  const [datos, setDatos] = useState([])

  async function handleFetch() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users/')
    ).json()
    setDatos(response)
  }

  useEffect(() => {
    handleFetch()
  }, [])

 // console.log(datos);

  return (
    <main className={value.theme === 'light' ? '' : 'dark'}  >
        <h1>Staff de Odontologos</h1>
      <div className='card-grid'>
        <Card datos={datos}/>
      </div>
    </main>
  )
}

export default Home;