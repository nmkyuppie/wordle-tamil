import React from 'react';

export default function WordBox({isActive, word, currentIndex, clickHandler}) {
  return (
    <div className='flex-column-center'>
      <div className="flex-row-center">
        <input className={isActive && currentIndex===0 ? 'tamil active' : 'tamil'} size={1} value={word[0]}/>
        <input className={isActive && currentIndex===1 ? 'tamil active' : 'tamil'} size={1} value={word[1]}/>
        <input className={isActive && currentIndex===2 ? 'tamil active' : 'tamil'} size={1} value={word[2]}/>
      {
        isActive &&
        <button className='btn btn-success' onClick={clickHandler}><span className="material-icons">done</span>&nbsp;&nbsp;ENTER</button>
      }
      </div>
    </div>)
}
