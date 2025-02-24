import React from 'react'

import SimpleTab from '../complex components/AdvancedTab';

//<SimpleTaskForm data={data} value_left={'left'} value_right={'right'} onClick_left={null} onClick_right={null}/>
//(data must be arr with classes, class must have two text fields!)

export default function TaskForm({data}) {
  return (<div className='grid grid-cols-[20rem] gap-4'>
    {data.map((doc) => {
      console.log(doc);
    return(<SimpleTab title={doc.title} desctiption={doc.description} />)})}
  </div>)
}