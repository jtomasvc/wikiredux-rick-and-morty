import React from 'react'

const Pagination = ({setNextPage}) => {
  return (
    <div>
      <button
        onClick={() => setNextPage(nextPage - 1)}
      >
        Atras
      </button>
      <button
        onClick={() => setNextPage(nextPage + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination