import React from 'react';
import { ayuthaEluthu, meiEluthu } from '../common/constants';

export default function Keyboard() {
  return (
      <div className="keyboard">
        <div className='mei-eluthu'>
            {
                meiEluthu.map(a=>
                    <btn className='btn-keyboard btn-secondary tamil'>{a}</btn>
                )
            }
        </div>
        <div className='ayutha-eluthu'>
            {
                ayuthaEluthu.map(a=>
                    <btn className='btn-keyboard btn-secondary tamil'>{a}</btn>
                )
            }
        </div>
      </div>
  );
}
