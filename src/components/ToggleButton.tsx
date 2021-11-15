import React, {FC} from 'react'
import IToggle from '../interfaces/Toggle'

const Toggle:FC<IToggle> = ({value, minusPlusFunc}) => {
  return (
    <button onClick={minusPlusFunc} className='btn book'>
      {value}
    </button>
  )
}

export default Toggle
