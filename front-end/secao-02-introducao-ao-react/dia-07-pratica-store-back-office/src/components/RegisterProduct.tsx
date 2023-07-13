import React from 'react';
import Product from './Product';
import '../styles/RegisterProduct.css';
import { ProductType } from '../types';

type Props = {
  handleSubmit: () => void;
  handleChange: (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  product: ProductType;
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit, handleChange, product } = props;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              value={ product.name }
              id="name"
              name="name"
              required
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              value={ product.description }
              id="description"
              name="description"
              required
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              value={ product.price }
              id="price"
              name="price"
              required
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              value={ product.image }
              id="image"
              name="image"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              value={ product.tags }
              id="tags"
              name="tags"
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ product } />
      </div>
    </main>
  );
}
