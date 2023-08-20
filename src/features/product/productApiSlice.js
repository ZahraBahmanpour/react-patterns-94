import { apiSlice } from "../../app/api/apiSlice";
import { PRODUCTS_URL } from "../../app/api/constants";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page) => `${PRODUCTS_URL}?_page=${page}&_limit=5`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
