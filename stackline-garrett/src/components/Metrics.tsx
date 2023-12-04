import React, { useState, useEffect } from 'react';

const Metrics = ({ sales }) => {
  const [sortedSales, setSortedSales] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...sales].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedSales(sortedData);
  };

  const getHeader = (key, label) => {
    return (
      <th onClick={() => requestSort(key)}>
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
