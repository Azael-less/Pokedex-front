import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../../components/CardContainer/CardContainer";
import Nav from "../../components/Nav/Nav";
import { useEffect } from "react";
import { getPokemon, getTypes, filterByAttack } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import { useState } from "react";
import Filtrados from "../Filtrados/Filtrados";



const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;

  const currentPokemon = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

 
// useEffect(() => {
  
// }


  return (
    <div>
      <Nav />
     
      <Filtrados setCurrentPage={setCurrentPage} />
      <Paginate
        pokemonPerPage={pokemonPerPage}
        pokemons={pokemons.length}
        paginado={paginado}
      />
      <CardContainer currentPokemon={currentPokemon} />
      <div></div>
    </div>
  );
};

export default Home;
