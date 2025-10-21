import React, { useState, useEffect } from 'react';
import { Product } from '../../entities/Product';
import './ProductCard.css';
import { useProductCardState } from './lib/useProductCardState';
import { CardHeader } from './ui/CardHeader/CardHeader';
import { CardDescription } from './ui/CardDescription/CardDescription';

interface ProductCardProps {
  product: Product;
  onToggleSelect?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggleSelect,
}) => {
  const {
    isSelected,
    isHovered,
    hasBeenHoveredAfterSelect,
    handleMouseEnter,
    handleToggle,
    handleMouseLeave,
  } = useProductCardState(product, onToggleSelect);

  return (
    <div
      className={`product-card-wrapper ${product.isOutOffStock ? 'product-card-wrapper--out-of-stock' : ''}`}
    >
      <div
        className={`product-card
      ${isSelected ? 'product-card--selected' : ''}
      ${product.isOutOffStock ? 'product-card--out-of-stock' : ''}`}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`product-card__image ${product.isOutOffStock ? 'out-of-stock' : ''}`}
        />
        <CardHeader
          hasBeenHoveredAfterSelect={hasBeenHoveredAfterSelect}
          isHovered={isHovered}
          isSelected={isSelected}
          product={product}
        ></CardHeader>
        <div className="product-card__footer">
          <span className="product-card__weight">{product.weight}</span>
          <span className="product-card__unit">{product.weightUnit}</span>
        </div>
      </div>
      <CardDescription
        product={product}
        isSelected={isSelected}
        onToggleSelect={handleToggle}
      />
    </div>
  );
};

export default ProductCard;
