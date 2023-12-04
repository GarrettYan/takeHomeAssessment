import React, { useState, useEffect } from 'react';

const Metrics = ({ sales }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <div className='metrics'>
      <table>
        <thead></thead>
        <tbody>
          {sales.map((sale, index) => (
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
