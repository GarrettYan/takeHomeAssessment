import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from './features/productDataSlice';

import './App.css';
import ProductInfo from './components/ProductInfo';
import RetailSale from './components/RetailSale';
import Metrics from './components/Metrics';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productData.product);
  console.log('test', productInfo);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div className='container1'>
      <Header />
      <div className='container2'>
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
