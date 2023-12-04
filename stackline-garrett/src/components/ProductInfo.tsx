// Header.tsx
import React from 'react';

const ProductInfo: React.FC = ({ image, title, subtitle, tags }) => {
  return (
    <div className='product-info'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
