import { useState } from 'react'


// componetents
import InputText from '../../components/Inputs/InputText'
import BtnSmBlue from '../../components/Buttons/BtnSmBlue';


const Register = () => {

  // states
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('')
  const [confirmPasswd, setConfirmPasswd] = useState('')
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // zerando erros
    setError("");

    // construindo user
    const user = {
      displayName,
      email,
      passwd
    }

    // checar se senha e confirm senha são iguais
    if (passwd !== confirmPasswd) {
      setError("As senhas devem ser iguais");
      return;
    }

    console.log(user);

  }

  return (
    <>
      <div className="card sm:w-6 md:w-1/4 mx-auto ">
        <div className="justify-center mb-5">
          <h1 className='flex justify-center'>Login</h1>
          <p className='flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <form onSubmit={handleSubmit} className="">
          <InputText placeholder={'Name'} required={true} value={displayName} onChange={e => setDisplayName(e.target.value)} />

          <InputText placeholder={'Email'} required={true} value={email} onChange={e => setEmail(e.target.value)} />

          <InputText placeholder={'Senha'} required={true} value={passwd} onChange={e => setPasswd(e.target.value)} />

          <InputText placeholder={'Confirmar Senha'} required={true} value={confirmPasswd} onChange={e => setConfirmPasswd(e.target.value)} />

          <BtnSmBlue label={'Salvar'} type={'submit'} />
          {error && <p className='text-red-400'>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Register