import React from 'react'

//<Input type={'text'} placeholder={'something'} onChange={null}/>

export default function ({type, value, placeholder, onChange}) {
  return (<div className='mt-2'>
        <input className='border-blue-900 border-2 rounded-lg text-center py-1 px-3' defaultValue={value} type={type} placeholder={placeholder} onChange={(e) => { onChange(e.target.value) }}/>
    </div>)
}
