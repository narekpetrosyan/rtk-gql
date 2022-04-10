import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../components/Item/Item';
import { loadRickMorty } from '../../store/features/rick-morty/async-actions';
import { selectRickMorty } from '../../store/features/rick-morty/rick-morty-slice';

import styles from './Main.module.css';

export const Main = () => {
  const { rickMorty, isLoading, meta } = useSelector(selectRickMorty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRickMorty({}));
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.App}>
      <div className={styles.Top}>
        <p>Pages: {meta.pages}</p>
        <p>Count: {meta.count}</p>
        <p>On Page: {rickMorty.length}</p>
      </div>
      <div className={styles.Body}>
        {rickMorty.map((el) => (
          <Item key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
      </div>
    </div>
  );
};
