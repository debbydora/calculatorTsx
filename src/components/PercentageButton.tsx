import React, {FC} from 'react'
import Ipercent from '../interfaces/Percentage'

const Percentage:FC<Ipercent> = ({value, percentFunc}) => {
  return (
    <button onClick={percentFunc} className='btn book'>
      {value}
    </button>
  )
}

export default Percentage
