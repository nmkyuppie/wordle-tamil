import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { keyboardSelector, clearClicks } from '../redux/keyboardSlice';
import { pickThisLetter, wordBoxSelector } from '../redux/wordBoxSlice';

 const Board = () => {
  const {prefix, suffix, word} = useSelector(keyboardSelector);
  const { currentWord, currentIndex } = useSelector(wordBoxSelector);
  const dispatch = useDispatch()
  return (
    <>
      {
        (prefix || suffix) &&
        <div className="board">
          {/* <btn className='btn-keyboard btn-primary'>TAB&nbsp;&nbsp;<span class="material-icons">keyboard_tab</span></btn> */}
          <h2 className="board-text tamil">{prefix} {(prefix && suffix) && '+'} {suffix} {(prefix && suffix) && '='} { (prefix && suffix) && word}</h2>
          <button className='btn-keyboard btn-danger' onClick={()=> dispatch(clearClicks())}><span className="material-icons">backspace</span>&nbsp;</button>
          <button className='btn-keyboard btn-primary' onClick={() => {
              dispatch(pickThisLetter({word, currentWord, currentIndex}))
              dispatch(clearClicks())
            }
          }><span className="material-icons">touch_app</span>&nbsp;</button>
        </div>

      }
    </>
  );
}

export default Board
