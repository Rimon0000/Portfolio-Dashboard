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

        GetSingleProject: builder.query({
            query: (projectId) =>({
                url: `/api/project/${projectId}`,
                method: "GET",
            }),
            providesTags: ['projects'],
        }),

        updateProject: builder.mutation({
            query: (options) =>({
                url: `/api/project/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['projects'],
        }),

        deleteProject: builder.mutation({
            query: (id) =>({
                url: `/api/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['projects'],
        }),
    })
})

export const {useAddProjectMutation, useGetAllProjectsQuery, useDeleteProjectMutation, useUpdateProjectMutation, useGetSingleProjectQuery } = projectsApi;