import React from 'react'

export default function CloseCrossButton({value, onClick}) {
  return (<div>
    <button className='font-bold text-xl absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem]' onClick={onClick}>{value}</button>
  </div>)
}
