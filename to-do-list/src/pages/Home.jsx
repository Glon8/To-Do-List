import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import TwoInputsForm from '../complex components/TwoInputsForm'
import AdvancedTaskForm from '../complex components/AdvancedTaskForm'
import BlockingBackground from '../components/BlockingBackground';
import BottomBar from '../components/BottomBar';
import DoubleButton from '../components/DoubleButton';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [usePageType, setPageType] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [useDataSave, setDataSave] = useState(false);
  const [useData, setData] = useState([]);
  const [useName, setName] = useState('');
  const [docID, setDocID] = useState();
  const [useTrig, setTrig] = useState(true);

  const bgFadeHandler = () => {
    setPageType(!usePageType);
  }

  const saveTask = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users', docID, 'tasks'), {
        title: title,
        description: desc
      });

      setDataSave(true);

      bgFadeHandler();
    }
    catch (error) {
      setDataSave(false);

      console.error(error);
    }
  }

  const fetchUser = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const userRef = query(
          collection(db, 'users'),
          where('email', '==', user.email)
        );
        const querySnapshot = await getDocs(userRef);
        querySnapshot.forEach((doc) => {
          setName(doc.data().name)
          setDocID(doc.id);
        });
        // ...
      } else {
        // User is signed out
        setName('');

        // ...
      }
    });
  }

  const loadTask = async () => {
    if (docID) {
      const querySnapshot = await getDocs(collection(db, "users", docID, 'tasks'));

      const dataArr = [];

      querySnapshot.forEach((doc) => {
        dataArr.push({id: doc.id, data: doc.data()});
      });

      setData(dataArr);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    loadTask();
  }, [docID, useDataSave,useTrig]);

  console.log(useData);

  return (<div className={`h-screen w-full z-0`}>
    <div className='flex justify-center'>
      <AdvancedTaskForm docID={docID} data={useData} onListChange={setTrig} value_left={'Edit'} value_right={'Delete'} />
    </div>

    <BottomBar
      buttonC={<Button width={'w-[3.5rem]'} height={'h-[3.5rem]'} hoverColor={'hover:border-blue-700 hover:bg-white hover:text-blue-500'} rounded={'rounded-full'} value={<p className='font-black text-2xl'>+</p>} onClick={bgFadeHandler} mt={'0'} />}
      buttonD={<DoubleButton hoverColor={'hover:border-blue-700 hover:bg-white hover:text-blue-500'} rounded_left={'rounded-l-full'} rounded_right={'rounded-r-full'} width={'10rem'} value_left={'SignIn'} value_right={'SingUp'} onClick_left={() => navigate('/SignIn')} onClick_right={() => navigate('/SignUp')} mt={'0'} />}
      color={'bg-violet-950'}
      rounded={'rounded-t-lg'} />

    <div className={usePageType ? 'hidden' : ''}>
      <BlockingBackground component={<TwoInputsForm title={'Create A Task'} f_i_type={'text'} f_i_placeholder={'Title'} f_i_func={setTitle} s_i_type={'text'} s_i_placeholder={'Description'} s_i_func={setDesc} submit_button_val={'Create Task'} submit_button_func={saveTask} cross_button_value={'x'} cross_button_func={bgFadeHandler} />} />
    </div>
  </div>)
}