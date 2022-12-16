import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
// import Logo from './components/Logo/Logo.js'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'
import { useEffect, useState, useRef } from 'react'


const Chatbot = ({ data }) => {

  const [isChatActive, setIsChatActive] = useState(false)

  const [isPrinting, setIsPrinting] = useState(false)

  const classNamesChatbot = classNames(classes.chatbot, {
    [classes.active]: isChatActive
  }, [])

  const classNamesChat = classNames(classes.chat, {
    [classes.open]: isChatActive
  }, [])

  const classNamesMessage = classNames(classes.message, {
    [classes.bot]: true,
    [classes.user]: false
  }, [])

  const classNamesSubmit = classNames(classes.submit, {
    [classes.disabled]: true
  }, [])

  const chatbotRef = useRef(null)
  const [userQuestion, setUserQuestion] = useState('')

  let messages = []

  const handleQuestionChange = (event) => {
    console.log(event.target.value)
  }

  const handleChatOpenClick = () => { setIsChatActive(true) }

  useEffect(() => {
    const printMessage = () => {


      const helloMessage = document.createElement('div')
      helloMessage.textContent = data.firstMessage
      helloMessage.className = classNamesMessage

      messages.push(helloMessage)

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
        question.textContent = faq.question
        questionItem.append(number)
        questionItem.append(question)
        questionList.append(questionItem)

      })
      console.log(questionList)
      messages.push(questionsMessage)



      setTimeout(() => {
        chatbotRef.current.append(helloMessage)
      }, 3000)

      setTimeout(() => {
        chatbotRef.current.append(questionsMessage)
      }, 5000)

    }
    printMessage()
  }, [])

  return (
    <div className={classNamesChatbot}>
      <div>
        <button onClick={handleChatOpenClick} className={classes.chatbotOpen}>
          <img src={chatbot} alt='' />
        </button>
        <div className={classNamesChat}>
          <header className={classes.header}>
            <div className={classes.logo}><Logo /></div>
            <div className={classes.notice}></div>
            <button className={classes.close}>
              <Close />
            </button>
          </header>
          <div ref={chatbotRef} className={classes.body}>
            {/* <div className={classNamesMessage}>
              {data.firstMessage}
            </div>
            <div className={classNamesMessage}>
              <ol className={classes.list}>
                {data.faqs.map((faq) =>
                  <li className={classes.item} key={faq.id}>
                    <span>{`${faq.id}. `}</span>
                    <button> {faq.question}</button>
                  </li>
                )}
              </ol>
              <span className={classes.messageDate}></span>
            </div> */}

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