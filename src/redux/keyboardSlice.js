import { createSlice } from '@reduxjs/toolkit'
import { uyirMeiEluthu } from '../common/constants';

const initialState = {
    prefix: '',
    prefixId: 0,
    suffix: '',
    suffixId: 0,
    word:''
  };

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState: initialState,
  reducers: {
    prefixClicked: (state, action) => {
        const {prefix, id} = action.payload
        state.prefix= prefix;
        state.prefixId= id;
        state.word = letterLookup(state.prefixId, state.prefix, state.suffixId, state.suffix);
    },
    suffixClicked: (state, action) => {
        const {suffix, id} = action.payload
        state.suffix = suffix;
        state.suffixId= id;
        state.word= letterLookup(state.prefixId, state.prefix, state.suffixId, state.suffix);
    },
    clearClicks: ()=>initialState
  }
})

const letterLookup = (prefixId, prefix, suffixId, suffix) =>{
    if(!prefixId){
        return suffix
    }
    if(!suffix){
        return prefix
    }
    return uyirMeiEluthu[prefixId][suffixId];
}

const keyboardReducer = keyboardSlice.reducer

// Action creators are generated for each case reducer function
export const { prefixClicked, suffixClicked, clearClicks } = keyboardSlice.actions
export const keyboardSelector = state => state.keyboard
export default keyboardReducer