import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRickMortyById } from '../../store/features/rick-morty/async-actions';
import { selectRickMorty } from '../../store/features/rick-morty/rick-morty-slice';

export const SingleItem = () => {
  const { charId } = useParams();
  const dispatch = useDispatch();
  const { singleRickMorty, isLoading } = useSelector(selectRickMorty);

  useEffect(() => {
    if (charId) {
      dispatch(getRickMortyById({ id: charId }));
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        <li>Name: {singleRickMorty?.name}</li>
        <li>Species: {singleRickMorty?.species}</li>
        <li>Status: {singleRickMorty?.status}</li>
        <li>
          <img src={singleRickMorty?.image} alt={singleRickMorty?.name} />
        </li>
      </ul>
    </div>
  );
};
