import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
import { getPokemonId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import myImage from "../../image/myImage.png"
import { getTypeBackgroundColor } from "./getTypeBackgroundColor";
import  detail  from "../../image/detail.gif"
import Nav from "../../components/Nav/Nav";



const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.detail)
  console.log(pokemon.length === undefined )
  return (
    <div className={styles.cardContainer}>
      {pokemon.length === undefined?  
      <div><Link to="/home" className={styles.returnLink}>
        <button className={styles.button}>Return</button>
      </Link>
      <div className={`${styles.card} ${styles.typeBorder}`} key={pokemon.id}>
          <div className={styles.container}>
            {pokemon.img?<img className={styles.image} src={pokemon.img} alt="pokemon" />:<img className={styles.image} src={myImage} alt="pokemon" />}
            <div className={styles.textContainer}>
              <h2 className={styles.name}> {pokemon.name}</h2>
              <p>HP: {pokemon.hp}</p>
              <p>Attack: {pokemon.attack}</p>
              <p>Defense: {pokemon.defense}</p>
              <p>Speed: {pokemon.speed}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <div className={styles.types}>
                <h3>Type:</h3>
                <ul>
                  {pokemon.types?.map((ele, i) => <li key={i} style={{ backgroundColor: getTypeBackgroundColor(ele.name || ele) }}
                    className={styles.typeItem}>{ele.name || ele}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div> 
        </div> : <div> <h1>Loading...</h1> <img src={detail} alt="" /></div> }
     
    </div>
    
  );
};

export default Detail;
