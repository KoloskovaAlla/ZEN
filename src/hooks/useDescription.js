import { useEffect } from 'react';

export const useDescription = (
  description,
  previewDetails,
  descriptionRef,
  classes
) => {
  const printWord = (node, word, delay) => {
    let index = 0;
    let timerID;

    const print = () => {
      if (index < word.length) {
        node.textContent += word[index];
        ++index;
        timerID = setTimeout(() => print(), delay);
      } else {
        clearTimeout(timerID);
      }
    };
    print();
  };

  useEffect(() => {
    const words = description.split(' '); 
    const TIME_PER_LETTER = 100;
    const $description = descriptionRef.current;
    const DESCRIPTION_MAX_WIDTH = previewDetails.width;
    const CURSOR_WIDTH = 2;
    let wordIndex = 0;
    let stringNode = null;
    let timerID;

    const nextWordNode = document.createElement('span');
    nextWordNode.style.position = 'fixed';
    nextWordNode.style.top = '-100vh';
    $description.append(nextWordNode);
    let stringNodeWidth = 0;
    $description.style.width = `${DESCRIPTION_MAX_WIDTH}px`;
    $description.style.border = '1px solid ';

    const newSpan = () => {
      stringNode = document.createElement('span');
      $description.append(stringNode);
    };

    const printString = () => {
      newSpan();

      const print = () => {
        if (!words[wordIndex]) {
          clearTimeout(timerID);
          stringNode.className = classes.cursorBlink;
          return;
        } else {
          stringNode.className = classes.cursor;
        }

        printWord(stringNode, words[wordIndex], TIME_PER_LETTER);

        timerID = setTimeout(() => {
          stringNodeWidth = stringNode.offsetWidth;
          let freeWidth =
            DESCRIPTION_MAX_WIDTH - stringNodeWidth - CURSOR_WIDTH;
          nextWordNode.textContent = words[wordIndex + 1];
          const nextWordWidth = nextWordNode.offsetWidth;

          // console.log('------------');
          // console.log(words[wordIndex + 1]);
          // console.log({ DESCRIPTION_MAX_WIDTH });
          // console.log({ stringNodeWidth });
          // console.log({ freeWidth });
          // console.log({ nextWordWidth });

          stringNode.className = '';

          if (nextWordWidth < freeWidth) {
            ++wordIndex;
            stringNode.textContent += ' ';
            print();
          }

          if (nextWordWidth >= freeWidth) {
            ++wordIndex;
            printString();
          }
        }, words[wordIndex].length * TIME_PER_LETTER);
      };
      print();
    };

    printString();
  }, [previewDetails, description, classes, descriptionRef]);
};
