import React from 'react';

const Metrics: React.FC = () => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return <div className='metrics'></div>;
};

export default Metrics;
