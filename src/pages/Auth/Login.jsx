import React from "react";
import InputText from "../../components/Inputs/InputText";

const Login = () => {
  return (
    <div className="card sm:w-6 md:w-1/3 mx-auto">
      <div className="flex justify-center">
        <div>
          <h1 className="text-center">Login</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <form action="#" className="mt-5">
        <InputText label={"Email"} placeholder={"Informe seu email"} />
        <InputText label={"Password"} placeholder={"Informe sua senha"} />
      </form>
    </div>
  );
};

export default Login;
