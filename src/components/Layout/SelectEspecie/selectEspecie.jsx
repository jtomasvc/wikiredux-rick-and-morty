import React from 'react'

const selectEspecie = ({setSelectEspecie}) => {
    const especies = [
        {
            value:'',
            name:'Buscar por Especie'
        },
        {
            value:"Human",
            name:"Humano"
        },
        {
            value:"Alien",
            name:"Alienigena"
        },
        {
            value:"Robot",
            name:'Robot'
        },
        {
            value:"Unknown",
            name:'Desconocida'
        },
        {
            value:"Mythological Creature",
            name:'Mitologico'
        },
        
        {
            value:"Animal",
            name:'Animal'
        },
        
        {
            value:"Humanoid",
            name:'Humanoide'
        }
    ]

  return (
    <>
        <select onChange={(e) => setSelectEspecie(e.target.value)}>
            {especies.map(especie => (
                <option
                    key={especie.value}
                    value={especie.value}
                >
                {especie.name}
                </option>
            ))}    
        </select>
    </>
  )
}

export default selectEspecie