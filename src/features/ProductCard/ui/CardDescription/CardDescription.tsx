import React from 'react';
import { Product } from '../../../../entities/Product';

interface CardDescriptionProps {
    product: Product;
    isSelected: boolean;
    onToggleSelect: (e: React.MouseEvent) => void;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
    product,
    isSelected,
    onToggleSelect,
}) => {
    return (
        <p className="product-card-description__text">
            {product.isOutOffStock
                ? product.outOffStockLabel
                : isSelected
                    ? product.discription
                    : product.text}
            {!product.isOutOffStock && !isSelected && product.link && (
                <a href="#" className="product-card-description__link" onClick={onToggleSelect}>
                    {product.link}
                </a>
            )}
        </p>
    );
};
