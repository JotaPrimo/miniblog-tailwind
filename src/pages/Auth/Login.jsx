import React, { useState } from "react";

// componentes
import InputText from "../../components/Inputs/InputText";
import BtnSmBlue from "../../components/Buttons/BtnSmBlue";

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <div className="card sm:w-6 md:w-1/3 mx-auto ">
        
    <div className="justify-center mb-5">
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <form action="#" className="">
      { email }
      <InputText placeholder={'Email'} required={true} value={email} onChange={ e => setEmail(e.target.value) } />
      { password }
      <InputText placeholder={'Senha'} required={true} value={password} onChange={ e => setPassword(e.target.value) } />
      <BtnSmBlue label={'Entrar'} type={'submit'} />
    </form>
  </div>
  );
};

export default Login;
