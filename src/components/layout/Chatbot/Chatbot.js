import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
// import Logo from './components/Logo/Logo.js'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'
import { useEffect, useState } from 'react'


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

  useEffect(() => {
    const printMessage = () => {

    }
  }, [])

  return (
    <div className={classNamesChatbot}>
      <div>
        <button onClick={() => { setIsChatActive(true) }} className={classes.chatbotOpen}>
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
          <div className={classes.body}>
            <div className={classNamesMessage}>
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
            </div>
          </div>
          <footer className={classes.footer}>
            <form className={classes.form}>
              <label className={classes.input}>
                <input type="text" placeholder="Message..." ></input>
              </label>
              <button class={classNamesSubmit}>
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