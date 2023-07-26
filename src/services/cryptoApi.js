import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ff53217cecmsh37017d8251719dep1b193bjsn836051fd6f7c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
// const cryptoApiHeaders = {
//    'X-RapidAPI-Key': 'd5c7e217f5msh8cc0543a6b2527ap19d5d9jsn2b2c2e1b4dbe',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }


const baseUrl = 'https://api.coinranking.com/v21'; 

const createRequest = (url) => ({ url, Headers :cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = createApi;
