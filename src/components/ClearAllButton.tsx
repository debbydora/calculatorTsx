import React, {FC} from 'react'
import IClearAll from '../interfaces/ClearAll'

const ClearAll: FC<IClearAll> = ({value, clearFunc}) => {
  return (
    <button onClick={clearFunc} className='btn book'>
      {value}
    </button>
  )
}

export default ClearAll
