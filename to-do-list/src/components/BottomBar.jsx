import React from 'react'

export default function BottomBar({buttonA, buttonB, buttonC, buttonD, buttonE, color, width, height, rounded}) {
  return (<div className={`${color != null? color : 'bg-red'} ${width != null? width : 'w-screen'} ${height != null? height : 'h-[4rem]'} fixed left-1/2 -translate-x-1/2 bottom-0 z-20 flex justify-between border-t-2 border-black ${rounded != null? rounded : ''}`}>
    <div className='ps-14 flex self-center'>{buttonA}</div>
    <div className='flex self-center'>{buttonB}</div>
    <div className='flex self-center'>{buttonC}</div>
    <div className='flex self-center'>{buttonD}</div>
    <div className='pe-14 flex self-center'>{buttonE}</div>
  </div>)
}