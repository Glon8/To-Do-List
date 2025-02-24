import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import TwoInputsForm from '../complex components/TwoInputsForm'

export default function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [useEmail, setEmail] = useState();
  const [usePassword, setPassword] = useState();

  signInWithEmailAndPassword(auth, useEmail, usePassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return (<div className='bg-indigo-200 z-0 h-full w-screen absolute'>
    <TwoInputsForm title={'SignIn'} f_i_type={'email'} f_i_placeholder={'Email'} f_i_func={(elem) => { setEmail(elem) }} s_i_type={'password'} s_i_placeholder={'Password'} s_i_func={(elem) => { setPassword(elem) }} submit_button_val={'Submit'} submit_button_func={null} cross_button_value={'x'} cross_button_func={() => navigate('/')} />
  </div>)
}
