import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from './features/productDataSlice';
import { AppDispatch } from './app/store';

import './App.css';
import ProductInfo from './components/ProductInfo';
import RetailSale from './components/RetailSale';
import Metrics from './components/Metrics';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector((state: any) => state.productData.product);
  console.log('test', productInfo);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div className='appContainer'>
      <Header />
      <div className='contentContainer'>
        <ProductInfo
          image={productInfo.image}
          title={productInfo.title}
          subtitle={productInfo.subtitle}
          tags={productInfo.tags}
        />
        <div>
          <RetailSale sales={productInfo.sales} />
          <Metrics sales={productInfo.sales} />
        </div>
      </div>
    </div>
  );
}

export default App;
