import { filterByAttack, filterCreated, filterSort, filterTypes } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import styles from "./Filtrado.module.css";

const Filtrados = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const type = useSelector(state => state.type);

  const handlerAttack = (event) => {
    dispatch(filterByAttack(event.target.value));
    setCurrentPage(1);
  }

  const handlerCreated = (event) => {
    dispatch(filterCreated(event.target.value));
    setCurrentPage(1);
  }

  const handlerSort = (event) => {
    dispatch(filterSort(event.target.value));
    setCurrentPage(1);
  }

  const handlerTypes = (event) => {
    dispatch(filterTypes(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  const typeOptions = type ?? [];
  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-item"]}>
        <select onChange={event => handlerSort(event)} className={styles["filter-text"]}>
          <option value="OrdenBy">alphabetical order</option>
          <option value="asc">[A-Z]</option>
          <option value="desc">[Z-A]</option>
        </select>
      </div>

      <div className={styles["filter-item"]}>
        <select onChange={event => handlerCreated(event)} className={styles["filter-text"]}>
        <option value="OrdenBy">Created and Existing</option>
          <option value="all">all</option>
          <option value="false">Existing</option>
          <option value="true">Created</option>
        </select>
      </div>

      <div className={styles["filter-item"]}>
        <select onChange={event => handlerAttack(event)} className={styles["filter-text"]}>
          <option value="all">Order by attack</option>
          <option value="lowest">minor attack</option>
          <option value="highest">biggest attack</option>
        </select>
      </div>

      <div className={styles["filter-item"]}>
        <select onChange={handlerTypes} className={styles["filter-text"]}>
          <option value="all">Filter by type</option>
          {typeOptions.map((ele) => 
            <option value={ele.name} key={ele.id}> {ele.name} </option>
          )}
        </select>
      </div>
    </div> 
  );
}

export default Filtrados;
