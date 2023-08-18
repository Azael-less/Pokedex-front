import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import myImage from "../../image/myImage.png"
// import pokecreate from "../../image/pokecreate.png"




const Card = ({ id, name, img, types}) => {
  return (
    <div className={styles.card} key={name}>
      <h1 className={styles.text}>{name}</h1>   
      <Link to={`/detail/${id}`}>
       {img?<img className={styles.img} src={img} alt="nombre" />: <img className={styles.img} src={myImage} alt="nombre" /> } 
      </Link>
      <div className={styles.textContainer}>
        {types && types.map((elem,i) => (  
          elem.name? <h1 className={styles.text}key={i}>{elem.name}</h1> :<h1 className={styles.text} key={i}>{elem}</h1>
        ))}
      </div>
    </div>
  )
}

export default Card