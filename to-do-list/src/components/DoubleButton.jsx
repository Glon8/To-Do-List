import React from 'react'

//<DoubleButton value_left={'left'} value_right={'right'} onClick_left={null} onClick_right={null} />

//beware that size of button must be adjusted per buttons value! manualy! OR IT LL BRAKE!

//other attributes are optional, like: width, height, color, borderColor, hoverColor, textColor, rounded_left, rounded_right, mt

export default function ({ value_left, onClick_left, value_right, onClick_right, width, height, color, hoverColor, textColor, borderColor, rounded_left, rounded_right, mt }) {
    return (<div className={`${width != null ? width : 'w-[9rem]'} ${height != null ? height : 'h-[3rem]'} ${mt != null ? `mt-[${mt}]` : `mt-[2rem]`}`}>
        <button className={`w-auto w-max-[50%] h-[100%] ps-5 pe-2 ${color != null ? color : 'bg-blue-500'} hover:border-t-4 hover:border-b-4 hover:border-l-4 ${borderColor != null ? borderColor : 'border-blue-500'} ${hoverColor != null ? hoverColor : 'hover:border-blue-700 hover:bg-blue-600'}  ${rounded_left != null ? rounded_left : 'rounded-l-lg'} ${textColor != null ? textColor : 'text-white'}`} onClick={onClick_left}>
            {value_left}
        </button>
        <button className={`w-auto w-max-[50%] h-[100%] pe-5 ps-2 ${color != null ? color : 'bg-blue-500'} hover:border-t-4 hover:border-b-4 hover:border-r-4 ${borderColor != null ? borderColor : 'border-blue-500'} ${hoverColor != null ? hoverColor : 'hover:border-blue-700 hover:bg-blue-600'}  ${rounded_right != null ? rounded_right : 'rounded-r-lg'} ${textColor != null ? textColor : 'text-white'}`} onClick={onClick_right}>
            {value_right}
        </button>
    </div>)
}