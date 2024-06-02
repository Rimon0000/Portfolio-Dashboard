import { baseApi } from "@/redux/api/baseApi"

const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addSkill: builder.mutation({
            query: (skillInfo) =>({
                url: "/api/create-skill",
                method: "POST",
                body: skillInfo
            }),
            invalidatesTags: ['skills'],
        }),

        getAllSkills: builder.query({
            query: (skillsInfo) =>({
                url: "/api/skills",
                method: "GET",
                body: skillsInfo
            }),
            providesTags: ['skills'],
        }),

        GetSingleSkill: builder.query({
            query: (skillId) =>({
                url: `/api/skill/${skillId}`,
                method: "GET",
            }),
            providesTags: ['skills'],
        }),

        updateSkill: builder.mutation({
            query: (options) =>({
                url: `/api/skill/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['skills'],
        }),

        deleteSkill: builder.mutation({
            query: (id) =>({
                url: `/api/skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['skills'],
        }),
    })
})

export const {useAddSkillMutation, useGetAllSkillsQuery, useDeleteSkillMutation, useUpdateSkillMutation, useGetSingleSkillQuery } = skillsApi;