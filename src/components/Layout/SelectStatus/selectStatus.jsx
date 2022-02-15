import React from 'react'

const selectStatus = ({setSelectStatus}) => {
  const status = [
    {
      value:'',
      name:'Buscar por Estatus'
    },
    {
      value:'Alive',
      name:'Vivo'
    },
    {
      value:'Dead',
      name:'Muerto'
    },
    {
      value:'Unknown',
      name:'Desconocido'
    },
  ]
  return (
    <>
        <select onChange={(e) => setSelectStatus(e.target.value)}>
          {status.map(estatus => (
            <option
              key={estatus.value}
              value={estatus.value}
            >
              {estatus.name}
            </option>
          ))}
        </select>
    </>
  )
}

export default selectStatus