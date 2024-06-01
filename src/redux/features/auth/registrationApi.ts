import { baseApi } from "@/redux/api/baseApi";

const registerApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        registration: builder.mutation({
            query: (userInfo) =>({
                url: "/api/register",
                method: "POST",
                body: userInfo
            })
        })
    })
})

export const {useRegistrationMutation} = registerApi