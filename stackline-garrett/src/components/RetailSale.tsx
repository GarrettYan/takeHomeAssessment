import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sortSalesData } from '../utils/saleHelpers';

const RetailSale: React.FC = ({ sales }) => {
  const chartRef = useRef();

  const sortedMonthlySales = sortSalesData(sales);

  const renderChart = (salesData) => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 90 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('style', 'height: auto; color:black');

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(salesData.map((d) => d.month))
      .padding(0.1);

    const maxSale = d3.max(salesData, (d) =>
      Math.max(d.retailSales, d.retailerMargin)
    );
    const y = d3.scaleLinear().domain([0, maxSale]).range([height, 0]);

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append('g').call(d3.axisLeft(y));
    const retailLine = d3
      .line()
      .curve(d3.curveBasis)
      .x((d) => x(d.month) + x.bandwidth() / 2)
      .y((d) => y(d.retailSales));

    const totalLine = d3
      .line()
      .curve(d3.curveBasis)
      .x((d) => x(d.month) + x.bandwidth() / 2)
      .y((d) => y(d.retailerMargin));

    g.append('path')
      .data([salesData])
      .attr('class', 'line')
      .attr('d', retailLine)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue');

    g.append('path')
      .data([salesData])
      .attr('class', 'line')
      .attr('d', totalLine)
      .attr('fill', 'none')
      .attr('stroke', 'green');
  };

  useEffect(() => {
    if (sortedMonthlySales && sortedMonthlySales.length > 0) {
      renderChart(sortedMonthlySales);
    }
  }, [sales]);

  return (
    <div className='retail-sale'>
      <div>Retail Sale</div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default RetailSale;
