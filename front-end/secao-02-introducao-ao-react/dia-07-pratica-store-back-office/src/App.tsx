import './styles/App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

type ShowComponentProps = 'registerProduct' | 'listProduct';

const initialProduct = {
  name: '',
  price: 0,
  description: '',
  tags: '',
  image: '',
  id: '',
};

function App() {
  const [showComponent, setShowList] = useState<ShowComponentProps>('registerProduct');
  const [itemPreview, setItemPreview] = useState<ProductType>(initialProduct);
  const [product, setProduct] = useState<ProductType[]>([]);

  function handleChange(event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setItemPreview({
      ...itemPreview,
      [name]: (name === 'price') ? Number(value) : value,
      id: uuidv4(),
    });
  }

  const submitForm = ():void => {
    setProduct([...product, itemPreview]);
    setItemPreview(initialProduct);
  };

  const handleDelete = (productId: string) => {
    setProduct(product
      .filter((produto) => (produto as ProductWithId).id !== productId));
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => setShowList('registerProduct') }>Cadastrar</button>
        <button onClick={ () => setShowList('listProduct') }>Ver produtos</button>
      </header>
      {showComponent === 'registerProduct'
      && <RegisterProduct
        handleChange={ (event) => handleChange(event) }
        product={ itemPreview }
        handleSubmit={ submitForm }
      />}
      {showComponent === 'listProduct'
      && <ListProducts
        products={ product }
        handleDelete={ handleDelete }
      />}
    </div>
  );
}

export default App;
