import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TProject {
    id: string;
    image: string;
    title: string;
    live: number;
    client: number;
    server: number;
    description: number;
    technology: number;
    features: number;
}

interface TInitialState {
    projects: TProject[];
}

const initialState: TInitialState = {
    projects: []
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<TProject>) => {
            state.projects.push(action.payload);
        },
        updateProject: (state, action: PayloadAction<TProject>) => {
            state.projects = state.projects.map(project =>
                project.id === action.payload.id ? action.payload : project
            );
        },
        removeProject: (state, action: PayloadAction<string>) => {
            state.projects = state.projects.filter(project => project.id !== action.payload)
        },
    }
});

export const { addProject, updateProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
