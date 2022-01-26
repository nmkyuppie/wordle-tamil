import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    word1:[],
    word2:[],
    word3:[],
    word4:[],
    word5:[],
    word6:[],
    currentWord: 1,
    currentIndex: 0
  };

export const wordBoxSlice = createSlice({
  name: 'wordBox',
  initialState: initialState,
  reducers: {
    pickThisLetter: (state, action) => {
        const {word, currentWord, currentIndex} = action.payload
        if(state.currentIndex<2)
            state.currentIndex += 1;
        switch (currentWord) {
            case 1:
                state.word1[currentIndex] = word;
                break;
            case 2:
                state.word2[currentIndex] = word;
                break;
            case 3:
                state.word3[currentIndex] = word;
                break;
            case 4:
                state.word4[currentIndex] = word;
                break;
            case 5:
                state.word5[currentIndex] = word;
                break;
            case 6:
                state.word6[currentIndex] = word;
                break;
        
            default:
                break;
        }
    }
  }
})

const wordBoxReducer = wordBoxSlice.reducer

// Action creators are generated for each case reducer function
export const { pickThisLetter } = wordBoxSlice.actions
export const wordBoxSelector = state => state.wordBox
export default wordBoxReducer