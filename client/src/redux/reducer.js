import {
  GET_POKEMON, GET_POKEMON_ID, GET_TYPES, POST_POKEMON, GET_NAME_POKEMON, FILTER_BY_ATTACK, FILTER_CREATED, FILTER_SORT, FILTER_TYPE
} from "./actions"

const inicialState = {
  pokemons: [],
  copyPokemon: [],
  detail: [],
  type: []
};

console.log(inicialState.pokemons)
const reducer = (state = inicialState, action) => {

  switch (action.type) {
    case GET_POKEMON:

      return {
        ...state,
        pokemons: action.payload,
        copyPokemon: action.payload
      }
    case GET_POKEMON_ID:
      return {
        ...state,
        detail: action.payload
      }
    case GET_TYPES:
      return {
        ...state,
        type: action.payload
      }
    case POST_POKEMON:
      return {
        ...state
      }
    case GET_NAME_POKEMON:
      console.log(action.payload)
      return {
        ...state,
        pokemons: action.payload
      }
    case FILTER_BY_ATTACK:
      const filtrado = action.payload === "lowest" ?
        [...state.pokemons].sort((a, b) => a.attack - b.attack) :
        [...state.pokemons].sort((a, b) => b.attack - a.attack)
      return {
        ...state,
        pokemons: filtrado
      }

    case FILTER_CREATED:
      const filterCreated = action.payload === "true" ?
        state.copyPokemon.filter((elem) => typeof elem.id !== "number") :
        state.copyPokemon.filter((elem) => typeof elem.id === "number")
      return {
        ...state,
        pokemons: action.payload === "all" ? state.copyPokemon : filterCreated
      }

    case FILTER_SORT:
      const filterSort = action.payload === "asc" ?
        [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name)) :
        [...state.pokemons].sort((a, b) => b.name.localeCompare(a.name))

      return {
        ...state,
        pokemons: filterSort
      }


      case FILTER_TYPE:
        const filterTypes = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
      
        const filterType = state.copyPokemon.filter((pokemon) =>
          pokemon.types.some((type) =>
            filterTypes.includes(typeof type === 'string' ? type : type.name)
          )
        );
      
        return {
          ...state,
          pokemons: filterType,
        };

    default:
      return { ...state }
  }


}



export default reducer