import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './products.types';

export const productApi = createApi({
    reducerPath: "api/products",
    baseQuery: fetchBaseQuery({ baseUrl: String(process.env.BASE_URL) }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], number>({ query: (limit: number = 5) => `products?limit=${{ limit }}` })
    })
})

export const { useGetProductsQuery } = productApi