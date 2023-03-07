import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseUnits: [],
    requestTypesToUnit: []
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        GetBaseUnits: (state) => {
            state.baseUnits = [
                {unitID:1, name:"bazap darom"},
                {unitID:1, name:"bazap merkaz"},
                {unitID:1, name:"bazap tzafon"},
            ]
        },

        GetRequestTypesToUnit: (state) => {
            state.requestTypesToUnit = [
                {
                    codRequestType:1,
                    requestType: "חתימה על ציוד חדש",
                    units:
                    [{ codUnit :5 ,name:"מרלוג מסווג"},{ codUnit :6 ,name:"מרלוג עיקרי"},{ codUnit :7 ,name:"מרלוג רכש"},
                    { codUnit :8 ,name:"קבטיה"}]
                },
                    
                {
                    codRequestType:2,
                    requestType: "החלפה/תיקון ציוד",
                    units:
                    [{ codUnit :5 ,name:"מרלוג מסווג"},{ codUnit :6 ,name:"מרלוג עיקרי"},{ codUnit :7 ,name:"מרלוג רכש"},
                    { codUnit :8 ,name:"קבטיה"}]
                }
            ]
        }
    }

})

export const { GetBaseUnits, GetRequestTypesToUnit} = mainSlice.actions;

export default mainSlice.reducer;