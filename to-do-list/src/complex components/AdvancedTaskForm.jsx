import React, { useState } from 'react'
import { db } from '../firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

import AdvancedTab from './AdvancedTab';
import DoubleButton from '../components/DoubleButton';
import BlockingBackground from '../components/BlockingBackground';
import TwoInputsForm from './TwoInputsForm';

//<AdvancedTaskForm data={data} value_left={'Edit'} value_right={'Delete'}/>
//(data must be arr with classes, class must have two text fields!)
//{doc.id, doc.data={title,desctiption}}

export default function TaskForm({ docID, data, onListChange, value_left, value_right }) {
  const [useTitle, setTitle] = useState("");
  const [useDesc, setDesc] = useState("");
  const [useHidden, setHidden] = useState(false);

  const bgFadeHandler = () => {
    setHidden(!useHidden);
  }

  return (<div className='grid grid-cols-[20rem] gap-4'>
    {data.map((el) => {
      const deleteTask = async () => {
        await deleteDoc(doc(db, 'users', docID, 'tasks', el.id));

        onListChange(!onListChange);
      }

      const updateList = async () => {
        console.log("title is " + useTitle + " and description is " + useDesc);

        if (useTitle != el.data.title && useDesc == el.data.description) {
          await updateDoc(doc(db, 'users', docID, 'tasks', el.id), {
            title: useTitle
          });

          console.log("option 1");
          console.log("use title is " + useTitle + " and the description is " + useDesc);
        }
        else if (useTitle == el.data.title && useDesc != el.data.description) {
          await updateDoc(doc(db, 'users', docID, 'tasks', el.id), {
            description: useDesc
          });

          console.log("option 2");
          console.log("use title is " + useTitle + " and the description is " + useDesc);
        }
        else if (useTitle != el.data.title && useDesc != el.data.description) {
          await updateDoc(doc(db, 'users', docID, 'tasks', el.id), {
            title: useTitle,
            description: useDesc
          });

          console.log("option 3");
          console.log("use title is " + useTitle + " and the description is " + useDesc);
        }

        onListChange(!onListChange);
      }

      return (<div>
        <div className={useHidden ? 'hidden' : ''}>
          <BlockingBackground component={<TwoInputsForm title={'Edit Task'} f_i_type={'text'} f_i_value={el.data.title} f_i_placeholder={'Title'} f_i_func={setTitle} s_i_type={'text'} s_i_value={el.data.description} s_i_placeholder={'Description'} s_i_func={setDesc} submit_button_val={'Save'} submit_button_func={updateList} cross_button_value={'x'} cross_button_func={bgFadeHandler} />} />
        </div>
        <AdvancedTab key={el.id} title={el.data.title} description={el.data.description}
          additionalComponent={<DoubleButton hoverColor={'hover:border-blue-700 hover:bg-white hover:text-blue-500'} value_left={value_left} value_right={value_right} onClick_left={bgFadeHandler} onClick_right={deleteTask} />} />
      </div>)
    })}
  </div>)
}