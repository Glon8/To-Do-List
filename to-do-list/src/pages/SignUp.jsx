import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebase'
import { collection, addDoc, deleteDoc } from "firebase/firestore";

import ThreeInputsForm from '../complex components/ThreeInputsForm'
import Button from '../components/Button';

export default function () {
  const navigate = useNavigate();
  const auth = getAuth();

  const [useEmail, setEmail] = useState();
  const [usePassword, setPassword] = useState();
  const [useName, setName] = useState("NoName");
  const [useAuth, setAuth] = useState(true);

  const handleSignUp = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: useEmail,
        name: useName
      });

      if (docRef) {
        createUserWithEmailAndPassword(auth, useEmail, usePassword)
          .then((userCredential) => {
            // Signed up 
            navigate('/');
            // ...
          })
          .catch(async (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            await deleteDoc(db, 'users', docRef.id);

            setAuth(false);
            // ..
          });
      }
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      setAuth(false);
      // ..
    };
  }

  return (
    <div className='bg-indigo-200 z-0 h-full w-screen absolute'>
      <ThreeInputsForm title={'Sign Up'} f_i_type={'email'} f_i_placeholder={'Email'} f_i_func={(elem) => { setEmail(elem) }} s_i_type={'password'} s_i_placeholder={'Password'} s_i_func={(elem) => { setPassword(elem) }} t_i_type={'text'} t_i_placeholder={'Name'} t_i_func={(elem) => setName(elem)} submit_button_val={'Submit'} submit_button_func={handleSignUp} cross_button_value={'x'} cross_button_func={() => navigate('/')} />
      <div className={`${useAuth ? 'hidden' : ''} absolute left-5 bottom-5`}>
        <Button value={'Sign up failed try again.'} onClick={() => { setAuth(!useAuth) }} />
      </div>
    </div>
  )
}
