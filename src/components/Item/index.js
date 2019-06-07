import React from 'react'
import './style.css'

export default props => {
  const { name, category, user } = props.item
  return (
    <div className='item'>
      <div className='name'>
        <p>{name}</p>
      </div>
      <div className='props'>
        <p className='text'>{category.name}</p>
        <p className='text'>criado por: {user.name}</p>
      </div>
    </div>
  )
}
