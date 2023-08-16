import { useState, useEffect } from 'react'


// import components
import InputText from '../../components/Inputs/InputText';

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(displayName);
    console.log(email);
    console.log(password);
  }

  const handleNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <div className="card sm:w-6 md:w-1/3 mx-auto ">
      <div className="flex justify-center">
        <div>
          <h1 className="text-center">Register</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
      { displayName }
        <InputText label={"Nome"} onchange={ handleNameChange } value={displayName} placeholder={"Informe seu nome"} />
        <InputText label={"Email"} onchange={ handleEmailChange } value={email} placeholder={"Informe seu email"} />
        <InputText label={"Password"} onchange={ e => setPassword(e.target.value)} value={password} placeholder={"Informe sua senha"} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Register