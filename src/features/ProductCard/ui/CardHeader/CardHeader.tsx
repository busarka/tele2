import React from 'react';
import { boldNumbers } from '../../../../shared/lib/boldNumbers';
interface CardHeaderProps {
  product: {
    subtitle: string;
    title: string;
    flavor: string;
    special: string[];
  };
  isSelected: boolean;
  isHovered: boolean;
  hasBeenHoveredAfterSelect: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  product,
  isSelected,
  isHovered,
  hasBeenHoveredAfterSelect,
}) => {
  return (
    <div className="product-card-header">
      <p className="product-card-header__subtitle">
        {isSelected && isHovered && hasBeenHoveredAfterSelect
          ? 'Котэ не одобряет?'
          : product.subtitle}
      </p>
      <h3 className="product-card-header__title">{product.title}</h3>
      <p className="product-card-header__flavor">{product.flavor}</p>
      <ul className="product-card-header__special">
        {product.special.map((item, index) => (
          <li key={index} className="product-card-header__special-item">
            {boldNumbers(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
