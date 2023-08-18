import React from 'react';
import styles from "./Paginate.module.css"

const Paginate = ({ pokemonPerPage, pokemons, paginado }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(pokemons / pokemonPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className={styles.pagnav}>
      <ul className={styles.navul}>
        {pageNumber.map((num) => (
          <li key={num} className={styles.navli}>
            <p onClick={() => paginado(num)} className={styles.navlink}>
              <span className={styles.circle}>{num}</span>
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
