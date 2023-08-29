// ./src/App.tsx
import './App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkCharacter } from './redux/actions';
import CharacterCard from './components/CharacterCard';
import { Dispatch } from './types';

function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        // eslint-disable-next-line max-len
        onChange={ ({ target }: React.ChangeEvent<HTMLInputElement>) => setCharacter(target.value) }
        value={ character }
      />
      <button
        type="button"
        onClick={ () => dispatch(thunkCharacter(character)) }
      >
        Search
      </button>
      <CharacterCard />
    </>
  );
}

export default App;
