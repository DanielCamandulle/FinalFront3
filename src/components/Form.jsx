import { useEffect } from 'react'
import { useState} from 'react'

const Form = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [msgSucess, setMsSucess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((nombre.trim() === '') || (nombre.length <= 4 )) {
      setMensajeError('Debe ingresar un nombre')
    } else if (email.trim() === '')  {
      setMensajeError('Debe ingresar un email válido')
    } else {
      setNombre('')
      setEmail('')
      setMensajeError('')
      setMsSucess(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`)

      // Guardar el mensaje de éxito en el almacenamiento local
      localStorage.setItem("successMessage", `Gracias ${nombre}, te contactaremos cuanto antes vía mail`);
    }
  }
  useEffect(() => {
    document.title = "Formulario";

    // Comprobar si hay un mensaje de éxito almacenado en localStorage al cargar la página
    const storedSuccessMessage = localStorage.getItem("successMessage");
    if (storedSuccessMessage) {
      setMsSucess(storedSuccessMessage);
      // Borrar el mensaje almacenado en localStorage para que no se muestre nuevamente después de recargar la página
      localStorage.removeItem("successMessage");
    }
  }, []);



  return (
    <div>
      <h2>Contactenos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:  
          <input
            type='text'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            placeholder='Ingresa tu nombre completo'
          />
        </label>
        <br />
        <br />
        
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Ingresa tu email'
          />
        </label>
        <br />
        <button type='submit'>Enviar</button>
      </form>
      {mensajeError ? <p>{mensajeError}</p> : <p id="msgSucess">{msgSucess}</p>}
    </div>
  )
}


export default Form;