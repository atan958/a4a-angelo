import React from 'react'

const SlideIndicator = ({current, index, onClick}) => {

    return (
    <i class={`fa-solid ${(current === index) ? 'fa-circle' :'fa-circle-dot'} indicator`} style={{animationDelay:`${index*2}s`}} onClick={onClick}/>
  )
}

export default SlideIndicator