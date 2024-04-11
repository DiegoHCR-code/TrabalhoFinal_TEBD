import React, { useState } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import axios from "axios"

export const Regsiter = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      })
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Registrar</h3>
              <h1>Minha conta</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Usuário *</span>
            <input type='text' required onChange={(e) => setUsername(e.target.value)} />
            <span>Email*</span>
            <input type='email' required onChange={(e) => setEmail(e.target.value)} />
            <span>Senha *</span>
            <input type='password' required onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='button'>
              Registrar
            </button>
          </form>
          {error && <span>Alguma coisas deu errado!</span>}
        </div>
      </section>
    </>
  )
}