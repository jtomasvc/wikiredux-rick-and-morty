import React from 'react'

const search = ({setSearchInputFront}) => {

  
  return (
    <>
      <input
          type='text'
          placeholder='Busca tu personaje por nombre'
          className='busqueda'
          onChange={(e) => {
            setSearchInputFront(e.target.value)
          }}
      />
    </>
  )
}

export default search