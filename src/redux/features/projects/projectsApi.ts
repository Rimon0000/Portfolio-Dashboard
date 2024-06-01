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

        getAllProjects: builder.query({
            query: (projectsInfo) =>({
                url: "/api/projects",
                method: "GET",
                body: projectsInfo
            }),
            providesTags: ['projects'],
        }),

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

        deleteProject: builder.mutation({
            query: (id) =>({
                url: `/api/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['projects'],
        }),
    })
})

export const {useAddProjectMutation, useGetAllProjectsQuery, useDeleteProjectMutation } = projectsApi;