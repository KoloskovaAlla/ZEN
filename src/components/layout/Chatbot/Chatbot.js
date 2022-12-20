import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'
import { useEffect, useState, useRef } from 'react'


const Chatbot = ({ data }) => {

  const [isTyping, setIsTyping] = useState(true)
  const [isChatActive, setIsChatActive] = useState(null)
  const [isMessageBot, setIsMessageBot] = useState(true)
  const [isMessageUser, setIsMessageUser] = useState(false)

  const classNamesChatbot = classNames(classes.chatbot, {
    [classes.active]: isChatActive
  }, [])

  const classNamesChat = classNames(classes.chat, {
    [classes.open]: isChatActive
  }, [])

  const classNamesMessage = classNames(classes.message, {
    [classes.bot]: isMessageBot,
    [classes.user]: isMessageUser
  }, [])

  const classNamesSubmit = classNames(classes.submit, {
    [classes.disabled]: true
  }, [])

  const chatbotRef = useRef(null)
  const chatbotHeaderRef = useRef(null)
  const [userQuestion, setUserQuestion] = useState('')
  const [messages, setMessages] = useState([])

  const handleQuestionChange = (event) => {
    console.log(event.target.value)
    setUserQuestion(event.target.value)
  }
  let currentQuestion
  const [message, setMessage] = useState({})

  const handleClickQuestion = (event) => {
    setIsMessageBot(false)
    setIsMessageUser(true)
    currentQuestion = event.target.innerHTML
    setMessage({
      author: 'user',
      content: currentQuestion
    })
    setMessages((messages) => [...messages, {
      author: 'user',
      content: currentQuestion
    }])
    setMessages((messages) => [...messages, {
      author: 'bot',
      content: currentQuestion
    }])
  }
  // const firstMessages = () => {
  //   const helloMessage = document.createElement('div')
  //   helloMessage.textContent = data.firstMessage
  //   helloMessage.className = classNamesMessage

  //   setMessages((messages) => [...messages, {
  //     author: 'bot',
  //     content: data.firstMessage
  //   }])

  //   const questionsMessage = document.createElement('div')
  //   questionsMessage.className = classNamesMessage
  //   const questionList = document.createElement('ol')
  //   questionList.className = classes.list
  //   questionsMessage.append(questionList)

  //   data.faqs.map((faq) => {
  //     const questionItem = document.createElement('li')
  //     questionItem.className = classes.item
  //     const number = document.createElement('span')
  //     number.textContent = `${faq.id}. `
  //     const question = document.createElement('button')
  //     question.addEventListener('click', handleClickQuestion)
  //     question.textContent = faq.question
  //     questionItem.append(number)
  //     questionItem.append(question)
  //     questionList.append(questionItem)
  //   })


  //   setMessages((messages) => [...messages, {
  //     author: 'bot',
  //   }])

  //   setTimeout(() => {
  //     if (isChatActive) chatbotRef.current.append(helloMessage)
  //   }, 1000)

  //   setTimeout(() => {
  //     if (isChatActive) chatbotRef.current.append(questionsMessage)

  //   }, 2000)

  //   // setTimeout(() => {
  //   //   if (isChatActive) setIsTyping(false)
  //   // }, 2050)




  // }

  const firstMessage = () => {
    setIsTyping(true)
    if (isChatActive) {

      const helloMessage = document.createElement('div')
      helloMessage.textContent = data.firstMessage
      helloMessage.className = classNamesMessage

      setTimeout(() => {
        setMessages((messages) => [...messages, {
          author: 'bot',
          content: data.firstMessage
        }])
        if (isChatActive) chatbotRef.current.append(helloMessage)
      }, 1000)
    }
  }

  const questionsListMesssage = () => {
    const questionsMessage = document.createElement('div')
    questionsMessage.className = classNamesMessage
    const questionList = document.createElement('ol')
    questionList.className = classes.list
    questionsMessage.append(questionList)

    data.faqs.map((faq) => {
      const questionItem = document.createElement('li')
      questionItem.className = classes.item
      const number = document.createElement('span')
      number.textContent = `${faq.id}. `
      const question = document.createElement('button')
      question.addEventListener('click', handleClickQuestion)
      question.textContent = faq.question
      questionItem.append(number)
      questionItem.append(question)
      questionList.append(questionItem)
    })

    setTimeout(() => {
      setMessages((messages) => [...messages, {
        author: 'bot',
      }])
      if (isChatActive) chatbotRef.current.append(questionsMessage)

    }, 2000)


  }

  const otherMessage = () => {

    if (isMessageUser) {
      const questionsMessage = document.createElement('div')
      questionsMessage.textContent = message.content
      questionsMessage.className = classNamesMessage
      chatbotRef.current.append(questionsMessage)
      setIsMessageBot(true)
      setIsMessageUser(false)
      setIsTyping(true)
    }

    if (isMessageBot) {
      data.faqs.map((faq) => {
        if (message.content === faq.question) {
          const currentAnswer = faq.answer
          const answerMessages = document.createElement('div')
          answerMessages.textContent = currentAnswer
          answerMessages.className = classNamesMessage

          setTimeout(() => {
            // setMessages((messages) => [...messages, {
            //   author: 'bot',
            // }])
            chatbotRef.current.append(answerMessages)
            setIsTyping(false)
          }, 2000)

          // setTimeout(() => {
          //   setIsTyping(false)
          // }, 2050)

        }
      })

    }
  }

  useEffect(() => {


    const printMessage = () => {
      if (messages.length === 0) firstMessage()

      if (messages.length === 1) questionsListMesssage()

      if (messages.length === 2) {
        setIsTyping(false)
        console.log('test')
      }

      otherMessage()
      console.log('-------')
      console.log(messages.length)
      console.log(isTyping)
    }
    printMessage()
  }, [isChatActive, isMessageUser, messages])



  return (
    <div className={classNamesChatbot}>
      <div>
        <button onClick={() => { setIsChatActive(true) }} className={classes.chatbotOpen}>
          <img src={chatbot} alt='' />
        </button>
        <div className={classNamesChat}>
          <header className={classes.header}>
            <div className={classes.logo}><Logo /></div>
            <div ref={chatbotHeaderRef} className={classes.notice}>
              {isTyping && <span>...typing</span>}
              {!isTyping && <span>online</span>}
            </div>
            <button className={classes.close}>
              <Close />
            </button>
          </header>
          <div ref={chatbotRef} className={classes.body}>
          </div>
          <footer className={classes.footer}>
            <form className={classes.form}>
              <label className={classes.input}>
                <input onChange={handleQuestionChange} type="text" placeholder="Message..." value={userQuestion}></input>
              </label>
              <button className={classNamesSubmit}>
                <Arrow />
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  )
}
export default Chatbot