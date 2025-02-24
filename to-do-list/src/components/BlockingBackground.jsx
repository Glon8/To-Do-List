import React from 'react'

//<BlockingBackground component={<div></div>} />

export default function({component}) {
  return (<div className={`bg-transparent/20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-30`}>
        {component}
    </div>)
}
