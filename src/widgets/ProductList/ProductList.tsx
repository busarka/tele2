import React, { useState } from 'react';
import ProductCard from '../../features/ProductCard/ProductCard';
import { Product } from '../../entities/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  products: initialProducts,
}) => {
  const [products, setProducts] = useState(initialProducts);

  const handleToggleSelect = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && !product.isOutOffStock
          ? { ...product, selected: !product.selected }
          : product
      )
    );
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleSelect={handleToggleSelect}
        />
      ))}
    </>
  );
};

export default ProductList;
