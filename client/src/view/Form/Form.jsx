// import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../../redux/actions";
import { getTypeBackgroundColor } from "../../view/Detail/getTypeBackgroundColor";
import { Validate } from "./Validate.js";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const type = useSelector((state) => state.type);

  const [form, setForm] = useState({
    name: "",
    img: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
  });

  const [error, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setError(Validate({ ...form, [property]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postPokemon(form))
    setForm({
      name: "",
          img: "",
          hp: 0,
          attack: 0,
          defense: 0,
          speed: 0,
          height: 0,
          weight: 0,
          type: [],
        })
        alert("Pokemo Creado");
        history.push("/home");
        
     
  };

  const handlerSelect = (event) => {
    const typeSelect = event.target.value;
    if (!form.type.includes(typeSelect)) {
      setForm({ ...form, type: [...form.type, typeSelect] });
    }
  };

  const handlerDelete = (elem) => {
    setForm({
      ...form,
      type: form.type.filter((type) => type !== elem),
    });
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.outerContainer}>
      <Link to="/home">
        <button className={styles.buttonHome}>Return</button>
      </Link>
      <div className={styles.container}>
        <div className={styles.header}>CREATE A POKEMON</div>
        <form onSubmit={submitHandler}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
              className={styles.input}
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="hp" className={styles.label}>
              Hp:
            </label>
            <input
              type="number"
              value={form.hp}
              onChange={changeHandler}
              name="hp"
              className={styles.input}
            />
            {error.hp && <p className={styles.error}>{error.hp}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attack" className={styles.label}>
              Attack:
            </label>
            <input
              type="number"
              value={form.attack}
              onChange={changeHandler}
              name="attack"
              className={styles.input}
            />
            {error.attack && <p className={styles.error}>{error.attack}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="defense" className={styles.label}>
              Defense:
            </label>
            <input
              type="number"
              value={form.defense}
              onChange={changeHandler}
              name="defense"
              className={styles.input}
            />
            {error.defense && <p className={styles.error}>{error.defense}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="speed" className={styles.label}>
              Speed:
            </label>
            <input
              type="number"
              value={form.speed}
              onChange={changeHandler}
              name="speed"
              className={styles.input}
            />
            {error.speed && <p className={styles.error}>{error.speed}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="height" className={styles.label}>
              Height:
            </label>
            <input
              type="number"
              value={form.height}
              onChange={changeHandler}
              name="height"
              className={styles.input}
            />
            {error.height && <p className={styles.error}>{error.height}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="weight" className={styles.label}>
              Weight:
            </label>
            <input
              type="number"
              value={form.weight}
              onChange={changeHandler}
              name="weight"
              className={styles.input}
            />
            {error.weight && <p className={styles.error}>{error.weight}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="img" className={styles.label}>
              Image:
            </label>
            <input
              type="text"
              value={form.img}
              onChange={changeHandler}
              name="img"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <h4>Types:</h4>
            <select className={styles.select} onChange={handlerSelect}>
              {type.map((type, i) => (
                <option
                  key={i}
                  value={type.name}
                  disabled={form.type.includes(type.name)}
                >
                  {type.name}
                </option>
              ))}
            </select>
            <div className={styles.selectedTypesContainer}>
              {form.type.map((ele, i) => (
                <button
                  onClick={() => handlerDelete(ele)}
                  key={i}
                  className={styles.selectedType}
                  style={{ backgroundColor: getTypeBackgroundColor(ele) }}
                >
                  <p>{ele}</p>
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
