import { baseApi } from "@/redux/api/baseApi"

const blogsApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addBlog: builder.mutation({
            query: (blogInfo) =>({
                url: "/api/create-blog",
                method: "POST",
                body: blogInfo
            }),
            invalidatesTags: ['blogs'],
        }),

        getAllBlogs: builder.query({
            query: (blogsInfo) =>({
                url: "/api/blogs",
                method: "GET",
                body: blogsInfo
            }),
            providesTags: ['blogs'],
        }),

        GetSingleBlog: builder.query({
            query: (blogId) =>({
                url: `/api/blog/${blogId}`,
                method: "GET",
            }),
            providesTags: ['blogs'],
        }),

        updateBlog: builder.mutation({
            query: (options) =>({
                url: `/api/blog/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['blogs'],
        }),

        deleteBlog: builder.mutation({
            query: (id) =>({
                url: `/api/blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['blogs'],
        }),
    })
})

export const {useAddBlogMutation, useGetAllBlogsQuery, useDeleteBlogMutation, useUpdateBlogMutation, useGetSingleBlogQuery } = blogsApi;