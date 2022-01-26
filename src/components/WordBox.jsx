import React from 'react';

export default function WordBox({isActive}) {
  return (
    <div className='flex-column-center'>
      <div className="flex-row-center">
        <input className="tamil" size={1}/>
        <input className="tamil" size={1}/>
        <input className="tamil" size={1}/>
      {
        isActive &&
        <btn className='btn btn-success'><span class="material-icons">done</span>&nbsp;&nbsp;ENTER</btn>
      }
      </div>
    </div>)
}
