import React from 'react'
import sendmail from './Mail.css'
const Mail = () => {
  return (
    <form >
      <label className="sendmail">Entrez votre E-mail: </label>
      <input type="text" name="mail" id="mail"></input>
    </form>
  )
}

export default Mail
