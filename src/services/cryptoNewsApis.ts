import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '54610834f5mshb37700f022e8778p1d8197jsn40c31f0c5baa'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = url => ({url, headers: newsHeader});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builders) => ({
        getCryptoNews: builders.query<any, {newCategory: string; count: number}>({
            query: ({newCategory, count}) => {
                return createRequest(`/news/search?q=${newCategory}&safeSearch=Off&textFormat=Raw&count=${count}`);
            }
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;