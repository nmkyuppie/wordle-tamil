import React from 'react';
import { useSelector } from 'react-redux';
import { wordBoxSelector } from '../redux/wordBoxSlice';
import WordBox from './WordBox';
import './wordle.css'

export default function Prediction() {
  const {
    word1,
    word2,
    word3,
    word4,
    word5,
    word6,
    currentWord,
    currentIndex
  } = useSelector(wordBoxSelector);
  return (
      <div className="prediction">
          <WordBox isActive={currentWord === 1} word={word1} currentIndex={currentIndex}></WordBox>
          <WordBox isActive={currentWord === 2} word={word2} currentIndex={currentIndex}></WordBox>
          <WordBox isActive={currentWord === 3} word={word3} currentIndex={currentIndex}></WordBox>
          <WordBox isActive={currentWord === 4} word={word4} currentIndex={currentIndex}></WordBox>
          <WordBox isActive={currentWord === 5} word={word5} currentIndex={currentIndex}></WordBox>
          <WordBox isActive={currentWord === 6} word={word6} currentIndex={currentIndex}></WordBox>
      </div>
  );
}
