import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type ProductDataType = {
  product: {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Array<ReviewType>;
    retailer: string;
    details: Array<string>;
    tags: Array<string>;
    sales: Array<SalesType>;
  };
};

type ReviewType = {
  customer: string;
  review: string;
  score: number;
};

type SalesType = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

const initialState: ProductDataType = {
  product: {
    id: '',
    title: '',
    image: '',
    subtitle: '',
    brand: '',
    reviews: [],
    retailer: '',
    details: [],
    tags: [],
    sales: [],
  },
};

export const fetchProductData = createAsyncThunk('productData/fetchProductData', async () => {
  const response = await fetch('/stackline_frontend_assessment_data_2021.json');
  const data = await response.json();
  return data[0]; 
});

const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productDataSlice.reducer;
