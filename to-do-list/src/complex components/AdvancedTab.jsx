import React from 'react'

//<AdvacedTab title={title} desctiption={description} additionalComponent={component}/>

//other attributes are optional, like: color, borderColor, titleColor, rounded, onClick_left, onClick_right

export default function SimpleTab({ title, description, color, borderColor, titleColor, rounded, additionalComponent }) {
    return (<div className={`h-auto w-auto w-max:100% ${color != null ? color : ''} ${borderColor != null ? borderColor : 'border-blue-700'} border-2 ${rounded != null ? rounded : 'rounded-xl'} drop-shadow-md`}>
        <p className={`mt-3 font-bold ${titleColor != null ? titleColor : 'text-blue-700'} text-xl`}>{title}</p>
        <p className='mt-2 mx-5 text-wrap'><span className='italic font-medium'>description:&nbsp;&nbsp;</span>{description != null ? description : 'none'}</p>
        <div className='flex justify-center mt-2 mb-3'>
            {additionalComponent}
        </div>
    </div>)
}