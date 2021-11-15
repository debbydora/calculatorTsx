import React, {FC} from 'react'
import { Fragment } from 'react'
import IButton from '../interfaces/Button'

const Button:FC<IButton> = ({clickHandler, value}): JSX.Element => {
  return (
    <Fragment>
      <button className='btn'  value={value} onClick={clickHandler}>
        {value}
      </button>
    </Fragment>
  )
}

export default Button
