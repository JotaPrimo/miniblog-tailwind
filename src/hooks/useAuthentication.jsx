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


}