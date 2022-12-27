import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import {classNames} from 'utils/helpers'
import {ReactComponent as Logo} from './assets/logo.svg'
import {ReactComponent as Close} from './assets/close.svg'
import {ReactComponent as Arrow} from './assets/arrow.svg'
import {useEffect, useState, useRef} from 'react'
import Message from './components/Message'

const Chatbot = ({data}) => {

  const [isTyping, setIsTyping] = useState(true)
  const [isChatActive, setIsChatActive] = useState(null)
  const [isQuestionAsked, setIsQuestionAsked] = useState(false)
  const [askedQuestion, setAskedQuestion] = useState('')
  const [isLastMessageUser, setIsLastMessageUser] = useState(false)

  const classNamesChatbot = classNames(classes.chatbot, {
    [classes.active]: isChatActive
  }, [])

  const classNamesChat = classNames(classes.chat, {
    [classes.open]: isChatActive
  }, [])

  // const classNamesMessage = classNames(classes.message, {
  //   [classes.bot]: isMessageBot,
  //   [classes.user]: isMessageUser
  // }, [])

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
    // setIsMessageBot(false)
    // setIsMessageUser(true)
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

  // const addFirstMessage = () => {
  //   setIsTyping(true)
  //   if (isChatActive) {
  //     // const helloMessage = document.createElement('div')
  //     // helloMessage.textContent = data.firstMessage
  //     // helloMessage.className = classNamesMessage

  //     setTimeout(() => {
  //       setMessages((messages) => [...messages, {
  //         author: 'bot',
  //         content: data.firstMessage,
  //         type: 'text'
  //       }])
  //       // if (isChatActive) chatbotRef.current.append(helloMessage)
  //     }, 1000)
  //   }
  // }

  // const addQuestionsListMesssage = () => {
  //   // const questionsMessage = document.createElement('div')
  //   // questionsMessage.className = classNamesMessage
  //   // const questionList = document.createElement('ol')
  //   // questionList.className = classes.list
  //   // questionsMessage.append(questionList)

  //   data.faqs.forEach((faq) => {
  //     // const questionItem = document.createElement('li')
  //     // questionItem.className = classes.item
  //     // const number = document.createElement('span')
  //     // number.textContent = `${faq.id}. `
  //     // const question = document.createElement('button')
  //     // question.addEventListener('click', handleClickQuestion)
  //     // question.textContent = faq.question
  //     // questionItem.append(number)
  //     // questionItem.append(question)
  //     // questionList.append(questionItem)
  //     setMessages((messages) => [...messages, {
  //       author: 'bot',
  //       content: faq.question,
  //       type: 'list'
  //     }])
  //   })

  //   setTimeout(() => {
  //     // setMessages((messages) => [...messages, {
  //     //   author: 'bot',
  //     //   content: data.firstMessage,
  //     //   type: 'list'
  //     // }])
  //     // if (isChatActive) chatbotRef.current.append(questionsMessage)

  //   }, 2000)
  // }

  // const otherMessage = () => {
  //   if (isMessageUser) {
  //     const questionsMessage = document.createElement('div')
  //     questionsMessage.textContent = message.content
  //     questionsMessage.className = classNamesMessage
  //     chatbotRef.current.append(questionsMessage)
  //     // setIsMessageBot(true)
  //     // setIsMessageUser(false)
  //     setIsTyping(true)
  //   }

  //   // if (isMessageBot) {
  //   //   data.faqs.forEach((faq) => {
  //   //     if (message.content === faq.question) {
  //   //       const currentAnswer = faq.answer
  //   //       const answerMessages = document.createElement('div')
  //   //       answerMessages.textContent = currentAnswer
  //   //       answerMessages.className = classNamesMessage

  //   //       setTimeout(() => {
  //   //         chatbotRef.current.append(answerMessages)
  //   //         chatbotRef.current.scrollTo(0, scrollHeight + answerMessages.scrollHeight, {behavior: 'smooth'})
  //   //         setIsTyping(false)
  //   //       }, 2000)
  //   //     }
  //   //   })

  //   // }
  // }
  let scrollHeight

  const addMessage = (author, content, type) => {
    setMessages((messages) => [...messages, {
      author,
      content,
      type,
    }])
  }

  useEffect(() => {
    const printMessage = () => {
      let list = []
      list = data.faqs.map((faq) => faq.question)
        

      if (messages.length === 0) {
        // setIsMessageBot(true)
        // setIsMessageUser(false)
        addMessage('bot', data.firstMessage, 'text')
      }

      if (messages.length === 1)  addMessage('bot', list, 'list')      

      if (messages.length === 2) setIsTyping(false)

      console.log(isQuestionAsked)

      if (isQuestionAsked) {
        addMessage('user', askedQuestion, 'text')
        console.log(askedQuestion)
        setIsQuestionAsked(false)
      }

      if (isLastMessageUser) {
        addMessage('bot', 'ответ', 'text')
        setIsLastMessageUser(false)
      }

      // otherMessage()

      scrollHeight = chatbotRef.current.scrollHeight
      chatbotRef.current.scrollTo(0, scrollHeight, {behavior: 'smooth'})
    }
    printMessage()
  }, [isChatActive, messages, scrollHeight, isQuestionAsked, askedQuestion])



  return (
    <div className={classNamesChatbot}>
      <div>
        <button onClick={() => {setIsChatActive(true)}} className={classes.chatbotOpen}>
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
            {messages.map((message) =>
              <Message
                message={message}        
                setIsQuestionAsked={setIsQuestionAsked}
                setAskedQuestion={setAskedQuestion}
                setIsLastMessageUser={setIsLastMessageUser}
                askedQuestion={askedQuestion}
              />
            )}
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