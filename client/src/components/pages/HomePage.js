import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../ProductList';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Hero from '../Hero';
import { listProducts } from '../../actions/productActions';
import Alert from '../Alert';
import Loader from '../Loader';

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <section className='my-2'>
        <h1 className='heading-primary'>Produtos em destaque</h1>
        <h2 className='heading-secondary'>
          <i className='fas fa-cookie-bite'></i> Novidades e mais vendidos
        </h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : (
          <ProductList
            products={products.filter((product) => product.isFeatured)}
          />
        )}
      </section>

      <AboutPage />
      <ContactPage />
    </>
  );
};

export default HomePage;
