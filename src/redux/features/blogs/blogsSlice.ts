import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TBlog {
    id: string;
    image: string;
    title: string;
    category: string;
    date: string;
    description: string;
}

interface TInitialState {
    blogs: TBlog[];
}

const initialState: TInitialState = {
    blogs: []
};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<TBlog>) => {
            state.blogs.push(action.payload);
        },
        updateBlog: (state, action: PayloadAction<TBlog>) => {
            state.blogs = state.blogs.map(blog =>
                blog.id === action.payload.id ? action.payload : blog
            );
        },
        removeBlog: (state, action: PayloadAction<string>) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        },
    }
});

export const { addBlog, updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
