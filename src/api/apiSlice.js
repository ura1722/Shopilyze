import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BASE_URL = "https://www.apishka.somee.com";


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    
    signIn: builder.mutation({
      query: (authData) => ({
        url: '/api/auth/singIn',
        method: 'POST',
        body: authData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response) => response,  
    }),
  }),
});


export const { useSignInMutation } = apiSlice;

