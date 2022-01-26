import React from 'react';
import { useDispatch } from 'react-redux'
import { uyirEluthu, meiEluthu } from '../common/constants';
import { prefixClicked, suffixClicked } from '../redux/keyboardSlice';

export default function Keyboard() {
    
  const dispatch = useDispatch()
  return (
      <div className="keyboard">
        <div className='mei-eluthu'>
            {
                meiEluthu.map(a=>
                    <button className='btn-keyboard btn-secondary tamil' onClick={() => dispatch(prefixClicked({prefix:a.letter, id:a.id}))}>{a.letter}</button>
                )
            }
        </div>
        <div className='uyir-eluthu'>
            {
                uyirEluthu.map(a=>
                    <button className='btn-keyboard btn-secondary tamil' onClick={() => dispatch(suffixClicked({suffix:a.letter, id:a.id}))}>{a.letter}</button>
                )
            }
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
  );
}
