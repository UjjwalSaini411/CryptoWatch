import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ff53217cecmsh37017d8251719dep1b193bjsn836051fd6f7c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({ url, Headers :cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = createApi;
