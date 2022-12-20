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
    setMessages((messages) => [...messages, message])
  }
  const firstMessages = () => {
    const helloMessage = document.createElement('div')
    helloMessage.textContent = data.firstMessage
    helloMessage.className = classNamesMessage
    setMessage({
      author: 'bot',
      content: data.firstMessage
    })
    setMessages((messages) => [...messages, message])

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

    setMessage({
      author: 'bot',
    })

    setMessages((messages) => [...messages, message])

    setTimeout(() => {
      if (isChatActive) chatbotRef.current.append(helloMessage)      
    }, 1000)

    setTimeout(() => {
      if (isChatActive) chatbotRef.current.append(questionsMessage)
      
    }, 2000)  
    setTimeout(() => {
      if (isChatActive) setIsTyping(false)      
    }, 2050)  
  }

  const otherMessage = () => {
    if (isMessageUser) {
      const questionsMessage = document.createElement('div')
      console.log(message.content)
      questionsMessage.textContent = message.content
      questionsMessage.className = classNamesMessage
      chatbotRef.current.append(questionsMessage)
      setIsMessageBot(true)
      setIsMessageUser(false)
      console.log('test1')
    }

    if (isMessageBot) {
      data.faqs.map((faq) => {
        setIsTyping(true)
        if (message.content === faq.question) {   
          const currentAnswer = faq.answer
          const answerMessages = document.createElement('div')
          answerMessages.textContent = currentAnswer
          answerMessages.className = classNamesMessage
          setTimeout(() => {
            chatbotRef.current.append(answerMessages)
          }, 2000)  

          setTimeout(() => {
            setIsTyping(false)
          }, 2050)  
         
        }
      })

    }
  }

  useEffect(() => {
    console.log(isTyping)
    if (messages.length === 0 || messages.length === 2) {setIsTyping(true)}

    const printMessage = () => {
      if (messages.length === 0 || messages.length === 2) firstMessages()          
     
      otherMessage()
    }
    printMessage()
  }, [isChatActive, isMessageUser])

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