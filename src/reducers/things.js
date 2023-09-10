import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const thingsApi = createApi({
    reducerPath: 'thingsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT'}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts"
        }),
        getSinglePost: builder.query({
            query: (postId) => `/posts/${postId}`
        })
    }),
})

export const {useGetAllPostsQuery, useGetSinglePostQuery} = thingsApi