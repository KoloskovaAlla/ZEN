import PreviewContext from 'contexts/PreviewContext';
import { useContext, useRef } from 'react';
import { useDescription } from 'hooks';
import classes from './Description.module.scss';
import { useSelector } from 'react-redux';

const Decription = () => {
  const descriptionRef = useRef(null);
  // const { previewDetails } = useContext(PreviewContext)
  const { previewDetails } = useSelector((state) => state.previewReducer);
  const { description } = previewDetails;
  console.log(previewDetails);

  useDescription(description, previewDetails, descriptionRef, classes);

  return <p ref={descriptionRef} className={classes.description} />;

  // const print = () => {
  //   const togglePrintMode = () => {
  //     printMode = letter === ' ' && descriptionMaxWidth - spanWidth < 90
  //       ? 'newString'
  //       : 'currentString'
  //   }

  //   const printString = () => {
  //     if (index < description.length && stringType === 'primary') {
  //       stringNode = document.createElement('span')
  //       stringNode.className = classes.cursor
  //       $description.append(stringNode)
  //       stringNode.textContent += letter
  //       index++
  //       stringType = 'next'
  //     } else if (index < description.length) {
  //       stringNode.textContent += letter
  //       index++
  //       spanWidth = stringNode.offsetWidth
  //       if (index === description.length - 1) {
  //         stringNode.className = `${classes.cursorBlink}`
  //       }
  //     }
  //   }

  //   if (index < description.length) {
  //     letter = description[index]
  //     togglePrintMode()

  //     if (printMode === 'newString') {
  //       stringNode.className = ``
  //       stringNode = document.createElement('span')
  //       stringNode.className = `${classes.cursor}`
  //       $description.append(stringNode)
  //       printString()
  //     } else {printString()}

  //     timerID = setTimeout(print, 100)
  //   }
  // }

  // const print = () => {
  //   // console.log({ word })
  //   const togglePrintMode = () => {
  //     // console.log(descriptionMaxWidth - spanWidth)
  //     // printMode = letter === ' ' && descriptionMaxWidth - spanWidth < 90
  //     //   // printMode = letter === ' '
  //     //   ? 'newString'
  //     //   : 'currentString'

  //     // console.log( spanWidth)
  //     // console.log(word.length * 10)
  //     // console.log(descriptionMaxWidth - spanWidth < word.length * 10)
  //     // console.log('------')

  //     if (letter === ' ' && descriptionMaxWidth - spanWidth < word.length * 10) printMode = 'newString'
  //     if (letter === ' ' && descriptionMaxWidth - spanWidth > word.length * 10) {
  //       printMode = 'curentString'
  //       wordMode = 'newWord'
  //     }
  //     if (letter !== ' ') {
  //       printMode = 'currentString'
  //       wordMode = 'currentWord'
  //     }

  //   }

  //   const primary = () => {
  //     stringNode = document.createElement('span')
  //     stringNode.className = classes.cursor
  //     $description.append(stringNode)
  //     stringType = 'next'
  //     console.log(descriptionMaxWidth - spanWidth)
  //   }

  //   if (index < description.length) {

  //     letter = description[index]

  //     if (index < description.length && stringType === 'primary') {
  //       primary()
  //     }

  //     togglePrintMode()

  //     if (printMode === 'newString') {
  //       stringNode.className = ``
  //       stringNode = document.createElement('span')
  //       console.log('новый спан')
  //       stringNode.textContent += word
  //       stringNode.className = `${classes.cursor}`
  //       $description.append(stringNode)
  //       spanWidth = stringNode.offsetWidth
  //       // console.log(stringNode.offsetWidth / word.length)
  //       word = ''
  //       word += letter// Это можно убрать
  //       index++
  //     }
  //     if (printMode === 'curentString' && wordMode === 'newWord') {
  //       // stringNode.textContent += word
  //       // console.log(word)
  //       let i = 0

  //       // stringNode.textContent += word[i]

  //       // const wordAdd = () => {

  //       //   if (i < word.length) {
  //       //     console.log(word[i])
  //       //     stringNode.textContent += word[i]
  //       //     i++
  //       //     // wordAdd()
  //       //     setTimeout(wordAdd, 100)
  //       //   }
  //       // }
  //       // wordAdd()

  //       const wordAdd = () => {
  //         if (i < word.length) {

  //           let promise = new Promise((resolve) => {
  //             setTimeout(() => { resolve(stringNode.textContent += word[i]) }, 200)
  //           })
  //           promise.then(() => {
  //             i++
  //             wordAdd()
  //           })

  //         }
  //       }
  //       wordAdd()

  //       spanWidth = stringNode.offsetWidth
  //       word = ' '
  //       index++

  //     }

  //     if (printMode === 'currentString' && wordMode === 'currentWord') {
  //       word += letter
  //       index++
  //     }
  //     // timerID = setTimeout(print, 500)
  //     print()

  //     if (index === description.length - 1) {
  //       stringNode.className = `${classes.cursorBlink}`
  //     }
  //   }
  // }
};

export default Decription;
