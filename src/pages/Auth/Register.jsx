import { useState } from 'react'


// componetents
import InputText from '../../components/Inputs/InputText'
import BtnSmBlue from '../../components/Buttons/BtnSmBlue';


const Register = () => {

  // states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('')
  const [confirmPasswd, setConfirmPasswd] = useState('')


  return (
    <>
      <div className="card sm:w-6 md:w-1/4 mx-auto ">
        <div className="justify-center mb-5">
          <h1 className='flex justify-center'>Login</h1>
          <p className='flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <form action="#" className="">
          <InputText placeholder={'Name'} required={true} value={name} onChange={e => setName(e.target.value)} />

          <InputText placeholder={'Email'} required={true} value={email} onChange={e => setEmail(e.target.value)} />

          <InputText placeholder={'Senha'} required={true} value={passwd} onChange={e => setPasswd(e.target.value)} />

          <InputText placeholder={'Confirmar Senha'} required={true} value={confirmPasswd} onChange={e => setConfirmPasswd(e.target.value)} />

          <BtnSmBlue label={'Entrar'} type={'submit'} />
        </form>
      </div>
    </>
  )
}

export default Register