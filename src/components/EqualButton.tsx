import React, {FC} from 'react'
import IEqual from '../interfaces/Equal'

const Equals:FC<IEqual> =({value, resultHandlerFunc}) => {
  return (
    <button onClick={resultHandlerFunc} className='btn book'>
      {value}
    </button>
  )
}

export default Equals
