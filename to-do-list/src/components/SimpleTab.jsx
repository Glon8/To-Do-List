import React from 'react'

//<SimpleTab title={title} desctiption={description} />

//other attributes are optional, like: color, borderColor, titleColor, rounded

export default function SimpleTab({title, desctiption, color, borderColor, titleColor, rounded}) {
  return (<div className={`h-auto w-auto w-max:100% ${color != null? color : ''} ${borderColor != null? borderColor : 'border-blue-700'} border-2 ${rounded != null? rounded :'rounded-xl'} drop-shadow-md`}>
    <p className={`mt-3 font-bold ${titleColor != null? titleColor : 'text-blue-700'} text-xl`}>{title}</p>
    <p className='mt-2 mb-3 mx-5'><span className='italic font-medium text-wrap'>description:&nbsp;&nbsp;</span>{desctiption != null? desctiption : 'none'}</p>
  </div>)
}
