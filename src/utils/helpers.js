export const scrollToTop = () => {
  let currentTopPosition = window.pageYOffset
  let timerID

  const scroll = () => {
    if (currentTopPosition > 0) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 100
      timerID = setTimeout(scroll, 30)
    } else {
      window.scrollTo(0, 0)
      clearTimeout(timerID)
    }
  }
  scroll()
}

export const scrollToSection = (sectionName) => {
  if (!sectionName) return

  const $header = document.querySelector('#header')
  const headerHeight = $header.offsetHeight
  const $section = document.querySelector(`#${sectionName}`)


  const sectionTopPosition = $section.offsetTop
  const targetTopPosition = sectionTopPosition - headerHeight

  let currentTopPosition = window.pageYOffset
  let timerID

  const scrollToTop = () => {
    if (currentTopPosition > targetTopPosition) {
      console.log(currentTopPosition)
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 70
      timerID = setTimeout(scrollToTop, 30)
    }
    else {
      window.scrollTo(0, targetTopPosition)
      clearTimeout(timerID)
    }
  }

  const scrollToBottom = () => {
    if (currentTopPosition < targetTopPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition += 70
      timerID = setTimeout(scrollToBottom, 30)
    }
    else {
      window.scroll(0, targetTopPosition)
      clearTimeout(timerID)
    }
  }

  if (currentTopPosition > targetTopPosition) scrollToTop()
  if (currentTopPosition < targetTopPosition) scrollToBottom()
}

// export const classNames = (mainClassName, mods, otherClassNames) => {
//   const arrMods = Object.keys(mods).filter((key) => mods[key])
//   return [mainClassName, ...arrMods, ...otherClassNames].join(' ')
// }

export const classNames = (
  mainClassName,
  mods = {},
  otherClassNames = []
) => {
  return [
    mainClassName,
    ...Object.entries(mods)
      .filter((mod) => Boolean(mod[1]))
      .map((mod) => mod[0]),
    ...otherClassNames.filter(Boolean)
  ].join(' ')
}

export const validateName = (name) => {
  return name ? true : false
  // const regex = /(^[A-Z])[a-z]{0,15}|(^[А-Я])[а-я]{0,15}/    
  // return regex.test(String(name)) 
}

export const validateTel = (tel) => {
  const regex = /[0-9]{10}/
  return regex.test(String(tel))
}

export const validateEmail = (email) => {
  const regex = /[a-z0-9]+@[a-z]+\.(ru|com)/gi
  return regex.test(String(email))
}

export const validateConnect = (connect) => {
  return connect ? true : false
}


// const handleConnectChange = (event) => {
//   setConnect(event.target.value)
//   console.log(event.target.value === '')
//   event.target.value === ''
//     ? setIsValidConnect(false)
//     : setIsValidConnect(true)

// }