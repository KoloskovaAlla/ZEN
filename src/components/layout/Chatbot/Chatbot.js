import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'
import { useEffect, useState, useRef } from 'react'
import Message from './components/Message'

const Chatbot = ({ data }) => {

  const { posts } = data

  const [isTyping, setIsTyping] = useState(true)
  const [isChatActive, setIsChatActive] = useState(null)
  const [isQuestionAsked, setIsQuestionAsked] = useState(false)
  const [askedQuestion, setAskedQuestion] = useState('')
  const [isLastMessageUser, setIsLastMessageUser] = useState(false)
  const [typedQuestion, setTypedQuestion] = useState([])

  const classNamesChatbot = classNames(classes.chatbot, {
    [classes.active]: isChatActive
  }, [])

  const classNamesChat = classNames(classes.chat, {
    [classes.open]: isChatActive
  }, [])

  const classNamesSubmit = classNames(classes.submit, {
    [classes.disabled]: true
  }, [])

  const chatbotRef = useRef(null)
  const chatbotHeaderRef = useRef(null)
  const [userQuestion, setUserQuestion] = useState('')
  const [messages, setMessages] = useState([])

  //   //       setTimeout(() => {
  //   //         chatbotRef.current.append(answerMessages)
  //   //         chatbotRef.current.scrollTo(0, scrollHeight + answerMessages.scrollHeight, {behavior: 'smooth'})
  //   //         setIsTyping(false)
  //   //       }, 2000)


  let scrollHeight

  const addMessage = (author, content, type) => {
    setMessages((messages) => [...messages, {
      author,
      content,
      type,
    }])
  }

  const handleQuestionChange = (event) => {
    setUserQuestion(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLastMessageUser(true)

    setIsQuestionAsked(true)
    setAskedQuestion(userQuestion)

    const userKeywords = userQuestion.split(' ')

    userKeywords.forEach((userKeyword) => {

      posts.forEach((post) => {
        const postKeywordString = post.keywords.join(' ')
        if (postKeywordString.includes(userKeyword)) console.log('we have answer for you')
      })
    })
  }

  useEffect(() => {
    const printMessage = () => {
      let list = []
      list = data.faqs.map((faq) => faq.question)

      if (messages.length === 0) addMessage('bot', data.firstMessage, 'text')

      if (messages.length === 1) addMessage('bot', list, 'list')

      if (messages.length === 2) setIsTyping(false)

      if (isQuestionAsked) addMessage('user', askedQuestion, 'text')

      if (isLastMessageUser) {
        data.faqs.forEach((faq) => {
          if (faq.question === askedQuestion) {
            addMessage('bot', faq.answer, 'text')
          }
        })
        setIsQuestionAsked(false)
        setIsLastMessageUser(false)
      }



      scrollHeight = chatbotRef.current.scrollHeight
      chatbotRef.current.scrollTo(0, scrollHeight, { behavior: 'smooth' })
    }
    printMessage()
  }, [isChatActive, messages, scrollHeight, isQuestionAsked, askedQuestion, isLastMessageUser])



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
            <form onSubmit={handleFormSubmit} className={classes.form}>
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