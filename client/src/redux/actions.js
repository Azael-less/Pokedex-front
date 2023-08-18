import axios from "axios"
export const GET_POKEMON = "GET_POKEMON"
export const GET_POKEMON_ID = "GET_POKEMON_ID"
export const GET_TYPES = "GET_TYPES"
export const POST_POKEMON = "POST_POKEMON"
export const GET_NAME_POKEMON = "GET_NAME_POKEMON"
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK"
export const FILTER_CREATED = "FILTER_CREATED"
export const FILTER_SORT = "FILTER_SORT"
export const FILTER_TYPE = "FILTER_TYPE"






export function getPokemon(name) {
  return async function (dispatch) {
    if (name) {
      const response = await axios.get(`http://localhost:3001/pokemon?name=${name.toLowerCase()}`)
      const pokemon = response.data
    dispatch({type: GET_NAME_POKEMON, payload: pokemon})


    } else {
      const response = await axios.get('http://localhost:3001/pokemon/');
      const pokemons = response.data
      dispatch({ type: GET_POKEMON, payload: pokemons });

    }

  };
};

export const getPokemonId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/pokemon/${id}`);
      const pokemon = response.data
      dispatch({ type: GET_POKEMON_ID, payload: pokemon });
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Manejo de errores
    }
  };
};


export const getTypes = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/type/')
    const type = response.data
    dispatch({ type: GET_TYPES, payload: type })
  }
}

export const postPokemon = (pokemon) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/pokemon/", pokemon)
    const createPokemon = response.data
    return dispatch({ type: POST_POKEMON, payload: createPokemon })
  }

}
export const filterByAttack = (payload) => {
  return {
    type: FILTER_BY_ATTACK, payload
  }
}

export const filterCreated = (payload) =>{
  return {
    type: FILTER_CREATED, payload
  }

}

export const filterSort = (payload) => {
  return {
    type: FILTER_SORT, payload 
  }
}

export const filterTypes = (payload) => {


  return {
    type: FILTER_TYPE, payload 
  }
}