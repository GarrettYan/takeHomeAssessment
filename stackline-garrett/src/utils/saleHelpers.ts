// Define interfaces for your data structures
interface SaleData {
    weekEnding: string;
    retailSales: number;
    retailerMargin: number;
    // add other properties as necessary
  }
  
  interface MonthlySales {
    month: string;
    retailSales: number;
    retailerMargin: number;
  }
  
  // Update the function to use these interfaces
  export function sortSalesData(salesData: SaleData[]): MonthlySales[] {
    const monthOrder = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
  
    const salesByMonth = salesData.reduce((acc: Record<string, MonthlySales>, sale) => {
      const month = new Date(sale.weekEnding).toLocaleString('default', {
        month: 'short',
      });
      if (!acc[month]) {
        acc[month] = { month, retailSales: 0, retailerMargin: 0 };
      }
      acc[month].retailSales += sale.retailSales;
      acc[month].retailerMargin += sale.retailerMargin;
      return acc;
    }, {});
  
    return Object.values(salesByMonth).sort(
      (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
    );
  }