import React from 'react'

//<Button value={'something'} onClick={null}/>

//other attributes are optional, like: width, height, color, borderColor, hoverColor, textColor, rounded, mt

export default function({value, onClick, width, height, color, hoverColor, textColor, borderColor, rounded, mt}) {
  return(<div className={`${color != null? color : 'bg-blue-500'} ${borderColor != null? borderColor : 'border-blue-500'} ${hoverColor != null? hoverColor : 'hover:border-blue-700 hover:bg-blue-600'}  hover: border-4 ${textColor != null? textColor : 'text-white'} font bold ${width != null? width : 'w-[8rem]'} ${height != null? height : 'h-[3rem]'}  ${rounded != null? rounded : 'rounded-lg'} flex justify-center align-middle ${mt != null? `mt-[${mt}]` : `mt-[2rem]`}`}>
    <button onClick={onClick}>{value}</button>
  </div>)
}
