import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {

  // dois estados possiveis: erro e loading
  const [erro, setErro] = useState();
  const [loading, setLoading] = useState()

  //cleanup -> limpar as funções, problema de memory leaky
  const [canceled, setCancelled] = useState()

  const auth = getAuth()

  function checkIfIsCanceled(params) {
    // evita o vazamento de memoria
    if (canceled) {
      return;
    }
  }

  // funcao para criar novo usuario
  // funcao assincrona, tem que verificar se deu problema e foi cancelada, setar o loadin e tentar cadastrar
  const createUser = async (data) => {
    checkIfIsCanceled();

    setLoading(true);

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth, 
        data.email,
        data.password
      )

        await updateProfile(user, {
          displayName: data.displayName
        })

    } catch (error) {

    }
  }

}