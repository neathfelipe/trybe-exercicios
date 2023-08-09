// App.test.tsx

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from '../App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());
  const MOCK_JOKE = {
    id: '7h3oGtrOfxc',
    joke: 'Thanks for explaining the word "many" to me. It means a lot.',
  };
  
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => MOCK_JOKE,
  } as Response;

  it('Ao renderizar a página, uma piada é renderizada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    
    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
  });
  
  it('A função fetch foi chamada uma vez', () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    render(<App />);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  })

  const MOCK_JOKE2 = {
    id: '7h3oGtr3fxc',
    joke: 'Qual é a cidade brasileira que não tem táxi? Uberlândia.',
  };
  
  const MOCK_RESPONSE2 = {
    ok: true,
    status: 200,
    json: async () => MOCK_JOKE2,
  } as Response;

  it('Ao clicar no botão “New joke”, a piada é alterada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    const button = screen.getByText('New Joke')
    expect(renderedJoke).toBeInTheDocument();
    await userEvent.click(button);
  })
  
  it('A nova piada é exibida na tela', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE2);
  
    render(<App />);
    const renderedJoke2 = await screen.findByText('Qual é a cidade brasileira que não tem táxi? Uberlândia.');
    expect(renderedJoke2).toBeInTheDocument();
  })
})