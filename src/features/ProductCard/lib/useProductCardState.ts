import { useState, useEffect, useCallback } from 'react';
import { Product } from '../../../entities/Product';

interface UseProductCardStateReturn {
  isSelected: boolean;
  isHovered: boolean;
  hasBeenHoveredAfterSelect: boolean;
  handleToggle: (e: React.MouseEvent) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useProductCardState = (
  product: Product,
  onToggleSelect?: (id: number) => void
): UseProductCardStateReturn => {
  const [isSelected, setIsSelected] = useState(product.selected || false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasBeenHoveredAfterSelect, setHasBeenHoveredAfterSelect] =
    useState(false);

  useEffect(() => {
    setIsSelected(product.selected || false);
  }, [product.selected]);

  useEffect(() => {
    if (isSelected && !isHovered && !hasBeenHoveredAfterSelect) {
      setHasBeenHoveredAfterSelect(true);
    }
  }, [isSelected, isHovered, hasBeenHoveredAfterSelect]);

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (product.isOutOffStock) return;
      setIsSelected((prev) => !prev);
      setHasBeenHoveredAfterSelect(false);
      if (onToggleSelect) {
        onToggleSelect(product.id);
      }
    },
    [product.isOutOffStock, product.id, onToggleSelect]
  );

  const handleMouseEnter = useCallback(() => {
    if (!product.isOutOffStock) setIsHovered(true);
  }, [product.isOutOffStock]);

  const handleMouseLeave = useCallback(() => {
    if (!product.isOutOffStock) setIsHovered(false);
  }, [product.isOutOffStock]);

  return {
    isSelected,
    isHovered,
    hasBeenHoveredAfterSelect,
    handleToggle,
    handleMouseEnter,
    handleMouseLeave,
  };
};
