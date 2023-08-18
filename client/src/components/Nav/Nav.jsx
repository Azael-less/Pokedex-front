import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemon } from "../../redux/actions"
const Nav =  () => {


const [search, setSearch ] = useState("")
const dispatch = useDispatch()


  const handlerSeearchBar = (event) => {
   setSearch(event.target.value)
  }

const handlerClick  = () =>{
 dispatch(getPokemon(search))
}

    return (
        <nav className={styles.navbar}>
         <ul className={styles.navbarLinks}>
        
          <li>
            <Link to="/create" className={styles.navbarLink}>
            <button className={styles.button} to="/create">New Pokemon</button>
            </Link>
          </li>
         </ul>
         <div className={styles.searchContainer}>
         <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by name"
          onChange={handlerSeearchBar}
          />
        <button className={styles.searchButton} onClick={handlerClick}>Search</button>
      </div>
          </div>

        </nav>
    )
}


export default Nav