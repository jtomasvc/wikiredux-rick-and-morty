import React, { useState, useEffect } from 'react'
import Search from '../Layout/Search/Search'
import Selectstatus from '../Layout/SelectStatus/selectStatus'
import SelectEspecie from '../Layout/SelectEspecie/selectEspecie'
import { Link } from 'react-router-dom'
import './Home.css'
import { BiRename, BiCurrentLocation, BiPlanet, BiUserCircle } from 'react-icons/bi'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getCharacter } from '../../actions/charactersActions'

const Home = () => {
  const dispatch = useDispatch()
  const [searchInputFront, setSearchInputFront] = useState("")
  const [selectEspecie, setSelectEspecie] = useState("")
  const [selectStatus, setSelectStatus] = useState("")
  
  const Characters = useSelector(state => state.character.character)
  useEffect(() =>{
    const getCharacters = () => dispatch(getCharacter(searchInputFront, selectEspecie, selectStatus ))
    getCharacters()
  },[Characters])

  return (
    <>
      <Link to='/'>
        <h1>WikiRedux Rick & Morty</h1>
      </Link>
      <nav className='contenedor'>
        <form className='form-busqueda'>
          <div className='buscador'>
            <Search
              setSearchInputFront={setSearchInputFront}
              className="busqueda"
            />
          </div>
          <div className='buscadorOne'>
            <Selectstatus
              setSelectStatus={setSelectStatus}
            />
          </div>
          <div className='buscadorTwo'>
            <SelectEspecie
              setSelectEspecie={setSelectEspecie}
            />
          </div>
        </form>
      </nav>
      <div className='contenedor'>
        {Characters && (
          Characters.map(character => (
          <div className='box' key={character.id}>
            <div className='box-status'>
              <span className={character.status === 'Alive' ? 'status-alive' : 'status-dead'}>{character.status}</span>
              <img className='' src={character.image}/>
            </div>
            <div className='box-details'>
              <div className='icon-box'>
                <BiRename/>
                <p>{character.name}</p>
              </div>
              <div className='icon-box'>
                <BiCurrentLocation/>
                <p>{character.location.name}</p>
              </div>
              <div className='icon-box'>
                <BiPlanet/>
                <p>{character.origin.name}</p>  
              </div>
              <div className='icon-box' >
                <BiUserCircle/>
                <p>{character.species}</p>
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </>
  )
}

export default Home