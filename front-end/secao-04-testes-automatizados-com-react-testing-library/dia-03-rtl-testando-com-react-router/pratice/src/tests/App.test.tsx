import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

it('Navega para página About', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})
