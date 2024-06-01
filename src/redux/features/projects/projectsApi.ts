import { baseApi } from "@/redux/api/baseApi"

const projectsApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addProject: builder.mutation({
            query: (projectInfo) =>({
                url: "/api/create-project",
                method: "POST",
                body: projectInfo
            }),
            invalidatesTags: ['projects'],
        }),
        
        // getSupplies: builder.query({
        //     query: (suppliesInfo) =>({
        //         url: "/api/v1/filter-supplies",
        //         method: "GET",
        //         body: suppliesInfo
        //     }),
        //     providesTags: ['supply'],
        // }),

        // getAllSupplies: builder.query({
        //     query: (suppliesInfo) =>({
        //         url: "/api/v1/supplies",
        //         method: "GET",
        //         body: suppliesInfo
        //     }),
        //     providesTags: ['supply'],
        // }),

        // GetSingleSupply: builder.query({
        //     query: (supplyId) =>({
        //         url: `/api/v1/supply/${supplyId}`,
        //         method: "GET",
        //     }),
        //     providesTags: ['supply'],
        // }),

        // updateSupply: builder.mutation({
        //     query: (options) =>({
        //         url: `/api/v1/supply/${options.id}`,
        //         method: "PUT",
        //         body: options.data,
        //     }),
        //     invalidatesTags: ['supply'],
        // }),

        // deleteSupply: builder.mutation({
        //     query: (id) =>({
        //         url: `/api/v1/supply/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ['supply'],
        // }),
    })
})

export const {useAddProjectMutation } = projectsApi;