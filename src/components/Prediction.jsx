import React from 'react';
import WordBox from './WordBox';
import './wordle.css'

export default function Prediction() {
  return (
      <div className="prediction">
          <WordBox isActive={true}></WordBox>
          <WordBox></WordBox>
          <WordBox></WordBox>
          <WordBox></WordBox>
          <WordBox></WordBox>
      </div>
  );
}
