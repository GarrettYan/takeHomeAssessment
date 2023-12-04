import React from 'react';

interface ProductInfoProps {
  image: string; // Adjust the type if your image is not a string URL
  title: string;
  subtitle: string;
  tags: string[]; // Assuming tags is an array of strings
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  image,
  title,
  subtitle,
  tags,
}) => {
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
