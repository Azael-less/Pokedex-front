import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import home1 from "../../image/home1.gif";



const CardsContainer = ({ currentPokemon }) => {


  return (
    <div className={styles.container}>
      {currentPokemon.length > 0 ? (
        currentPokemon.map(({ id, name, img, hp, attack, types }) => {
          return (
            <Card
              key={name}
              id={id}
              img={img}
              name={name}
              hp={hp}
              attack={attack}
              types={types}
            />
          );
        })
      ) : (
        <div>
          <h1>loading...</h1>
          <img src={home1} alt="home" />
        </div>
      )}

    </div>
  );
};

export default CardsContainer;
