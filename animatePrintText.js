const printWord = (node, word, delay) => {
  let index = 0
  let timerID = null

  const print = () => {
    if (index < word?.length) {
      node.textContent += word[index]
      ++index
      timerID = setTimeout(() => print(), delay)
    } else {
      clearTimeout(timerID)
    }
  }
  print()
}

export const animatePrintText = (
  textNode = null,
  textContent = ''
) => {
  if (!textNode || !textContent) return
  const words = textContent.split(' ')
  const PRINT_TIME_PER_LETTER = 100
  const TEXT_MAX_WIDTH = textNode.offsetWidth
  const CURSOR_WIDTH = 2
  let wordIndex = 0
  let stringNode = null
  // textNode.style.border = '1px dashed red'
  textNode.innerHTML = null
  let timerID = null

  const nextWordWidthNode = document.createElement('span')
  nextWordWidthNode.style.position = 'fixed'
  nextWordWidthNode.style.top = '-100vh'
  textNode.append(nextWordWidthNode)

  const createStringNode = () => {
    stringNode = document.createElement('span')
    textNode.append(stringNode)
  }

  const printString = () => {
    createStringNode()

    const print = () => {
      if (!words[wordIndex]) {
        clearTimeout(timerID)
        stringNode.className = 'cursor-blink'
        return
      } else {
        stringNode.className = 'cursor'
      }
      printWord(stringNode, words[wordIndex], PRINT_TIME_PER_LETTER)

      timerID = setTimeout(() => {
        // console.log('-------------------------')
        // console.log('finally printWord')
        nextWordWidthNode.textContent = words[wordIndex + 1] ?? ''
        const nextWordWidth = nextWordWidthNode.offsetWidth
        const stringNodeWidth = stringNode.offsetWidth
        const freeNodeWidth = TEXT_MAX_WIDTH - CURSOR_WIDTH - stringNodeWidth
        // console.log({nextWordWidth})
        // console.log({stringNodeWidth})
        // console.log({TEXT_MAX_WIDTH})
        // console.log({freeNodeWidth})

        stringNode.className = ''

        if (nextWordWidth < freeNodeWidth) {
          ++wordIndex
          stringNode.textContent += ' '
          print()
        }
        if (nextWordWidth >= freeNodeWidth) {
          ++wordIndex
          printString()
        }
      }, words[wordIndex]?.length * PRINT_TIME_PER_LETTER)
    }
    
    print()
  }

  printString()
}