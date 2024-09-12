import React from 'react';

const Chip = (prop: React.PropsWithChildren) => {
  return <div className='chip'>{prop.children}</div>;
};

export default Chip;
