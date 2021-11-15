import React, {FC} from 'react'
import IBackspace from '../interfaces/BackspaceButton'


const Backspace:FC<IBackspace>= ({value, backFunc}) => {
  return (
    <>
      <button onClick={backFunc} className='btn book'>
        {value}
      </button>
    </>
  )
}

export default Backspace