import React from 'react';
import './chip.css';

const Chip = (prop: React.PropsWithChildren) => {
  return <div className='chip'>{prop.children}</div>;
};

export default Chip;
