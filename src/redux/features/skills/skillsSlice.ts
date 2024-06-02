import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TSkill {
    id: string;
    title: string;
}

interface TInitialState {
    skills: TSkill[];
}

const initialState: TInitialState = {
    skills: []
};

const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill: (state, action: PayloadAction<TSkill>) => {
            state.skills.push(action.payload);
        },
        updateSkill: (state, action: PayloadAction<TSkill>) => {
            state.skills = state.skills.map(skill =>
                skill.id === action.payload.id ? action.payload : skill
            );
        },
        removeSkill: (state, action: PayloadAction<string>) => {
            state.skills = state.skills.filter(skill => skill.id !== action.payload)
        },
    }
});

export const { addSkill, updateSkill, removeSkill } = skillSlice.actions;
export default skillSlice.reducer;
