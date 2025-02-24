import React from 'react'

import Button from '../components/Button'
import CloseCrossButton from '../components/CloseCrossButton'
import Input from '../components/Input'

//<TwoInputsForm title={'Create A Task'} f_i_type={'text'} f_i_placeholder={'Type in title'} f_i_func={(elem) => {setTitle(elem)}} s_i_type={'text'} s_i_placeholder={'Type in description'} s_i_func={(elem) => {setDesc(elem)}} submit_button_val={'Create Task'} submit_button_func={null} cross_button_value={'x'} cross_button_func={bgFadeHandler} />

export default function TwoInputsForm({title, f_i_value, f_i_type, f_i_placeholder, f_i_func, s_i_type, s_i_value, s_i_placeholder, s_i_func, submit_button_val, submit_button_func, cross_button_value, cross_button_func}) {
  return (<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
    <div className='flex-col pt-16 justify-items-center w-[22rem] h-[30rem] bg-white border-blue-700 border-2 rounded-3xl relative'>
    
      <CloseCrossButton value={cross_button_value} onClick={cross_button_func}/>

      <h1 className='font-black mt-[3rem] text-2xl mb-[3rem] text-blue-700'>{title}</h1>
    
      <Input type={f_i_type} value={f_i_value} placeholder={f_i_placeholder} onChange={f_i_func}/>
      <Input type={s_i_type} value={s_i_value} placeholder={s_i_placeholder} onChange={s_i_func}/>
    
      <Button value={submit_button_val} onClick={submit_button_func} />
    </div>
  </div>)
}
