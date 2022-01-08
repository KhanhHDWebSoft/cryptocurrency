import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '54610834f5mshb37700f022e8778p1d8197jsn40c31f0c5baa'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string) => ({url, headers: cryptoHeaders})

export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builders) => ({
        getCryptos: builders.query<any, number>({
            query: (count) => {
                return createRequest(`/coins?limit=${count}`);
            }
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery } = cryptoApi;