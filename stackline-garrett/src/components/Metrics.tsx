import { useState, useEffect } from 'react';
import { formatter, requestSort } from '../utils/tableHelpers';

const Metrics = ({ sales }) => {
  const [sortedSales, setSortedSales] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = requestSort(
    sales,
    sortConfig,
    setSortedSales,
    setSortConfig
  );

  const getHeader = (key, label) => {
    return (
      <th onClick={() => handleSort(key)}>
        {label}
        {sortConfig.key === key
          ? sortConfig.direction === 'asc'
            ? ' ▲'
            : ' ▼'
          : ' ⇵'}
      </th>
    );
  };

  useEffect(() => {
    setSortedSales(sales);
  }, [sales]);

  return (
    <div className='metrics'>
      <table>
        <thead>
          <tr>
            {getHeader('weekEnding', 'Week Ending')}
            {getHeader('retailSales', 'Retail Sales')}
            {getHeader('wholesaleSales', 'Wholesale Sales')}
            {getHeader('unitsSold', 'Units Sold')}
            {getHeader('retailerMargin', 'Retailer Margin')}
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>{formatter.format(sale.retailSales)}</td>
              <td>{formatter.format(sale.wholesaleSales)}</td>
              <td>{sale.unitsSold}</td>
              <td>{formatter.format(sale.retailerMargin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Metrics;
