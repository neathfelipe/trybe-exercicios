import { useState } from 'react';
import './App.css';

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1);
    }
  }

  function handleAddClick() {
    if (inputValue) setToolList([...toolList, inputValue]);
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <div className="btn-container">
        <button onClick={handlePreviousClick}>Anterior</button>
        <button onClick={handleNextClick}>Próximo</button>
      </div>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setInputValue(target.value)} />
        <button onClick={handleAddClick}>Adicionar</button>
      </section>
      <section>
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
