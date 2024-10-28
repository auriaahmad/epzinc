// PositionWrapper.tsx
import React, { ReactNode } from 'react';

interface PositionWrapperProps {
  children: ReactNode; // Ensure that the children prop is defined here
  display?: 'flex' | 'grid' | 'block';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  flexDirection?: 'row' | 'column';
  gridCols?: number;
  gridRows?: number;
  gap?: number;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const PositionWrapper: React.FC<PositionWrapperProps> = ({
  children,
  display = 'block',
  justifyContent = 'start',
  alignItems = 'start',
  flexDirection = 'row',
  gridCols = 1,
  gridRows = 1,
  gap = 0,
  position = 'relative',
  top,
  bottom,
  left,
  right,
}) => {
  const flexClasses = display === 'flex' ? `flex ${flexDirection === 'column' ? 'flex-col' : 'flex-row'}` : '';
  const gridClasses = display === 'grid' ? `grid grid-cols-${gridCols} grid-rows-${gridRows}` : '';
  const justifyClasses = `justify-${justifyContent}`;
  const alignClasses = `items-${alignItems}`;
  const gapClass = gap ? `gap-${gap}` : '';
  const positionClass = position ? `position-${position}` : '';
  const topClass = top ? `top-${top}` : '';
  const bottomClass = bottom ? `bottom-${bottom}` : '';
  const leftClass = left ? `left-${left}` : '';
  const rightClass = right ? `right-${right}` : '';

  return (
    <div
      className={`${display === 'flex' ? flexClasses : gridClasses} ${justifyClasses} ${alignClasses} ${gapClass} ${positionClass} ${topClass} ${bottomClass} ${leftClass} ${rightClass}`}
    >
      {children}
    </div>
  );
};

export default PositionWrapper;
