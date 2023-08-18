import { Link } from "react-router-dom";
import styles from "./Landingpage.module.css"; // Asegúrate de tener este archivo CSS

const Landingpage = () => {
  return (
    <div className={styles.container}>
      <h1>welcome to my pokemon App</h1>
      <h2>Discover Amazing Features!</h2>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <p>enjoy creating and watching pokemons.</p>
    </div>
  );
};

export default Landingpage;
