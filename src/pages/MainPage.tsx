import React from 'react';
import ProductList from '../widgets/ProductList/ProductList';
import { mockProducts } from '../shared/mockData';
import './MainPage.css';

const MainPage: React.FC = () => {
  const isOdd = mockProducts.length % 2 !== 0;
  const containerClass = `main-page__cards ${isOdd ? 'cards--odd' : 'cards--even'}`;
  return (
    <div className="main-page">
      <div className="main-page__content">
        <div className="main-page__title-container">
          <h1 className="main-page__title">Ты сегодня покормил кота?</h1>
        </div>
        <div className={containerClass}>
          <ProductList products={mockProducts} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
