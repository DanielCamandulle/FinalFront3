


// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react';
import Form from '../components/Form'
import { GlobalContext } from "../components/utils/GlobalContext";


const Contact = () => {
  const { value } = useContext(GlobalContext);
  return (
    <main className={value.theme === 'light' ? '' : 'dark'} >
        <h1>Formulario de contacto</h1>
      <div className='card-grid'>
      <Form/>
      </div>
    </main>
  )
}

export default Contact;