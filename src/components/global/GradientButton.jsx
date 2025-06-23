import React from 'react'

const GradientButton = ({ text, onClick, width }) => {
  return (
    <button className='cursor-pointer gradient-blue p-16 rounded-xl text-white font-semibold' onClick={onClick} style={{width:width}}>
        {text}
    </button>
  )
}

export default GradientButton