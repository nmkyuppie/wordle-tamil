import React from 'react';

 const Board = () => {
  return (
      <div class="board">
        <btn className='btn-keyboard btn-primary'>TAB&nbsp;&nbsp;<span class="material-icons">keyboard_tab</span></btn>
        <h2 class="board-text tamil">க் + அ = க</h2>
        <btn className='btn-keyboard btn-danger'><span class="material-icons">backspace</span>&nbsp;</btn>
        <btn className='btn-keyboard btn-primary'><span class="material-icons">touch_app</span>&nbsp;</btn>
      </div>
  );
}

export default Board
