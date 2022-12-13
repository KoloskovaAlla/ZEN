import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
// import Logo from './components/Logo/Logo.js'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'


const Chatbot = ({ data }) => {

  const classNamesChatbot = classNames(classes.chatbot, {
    [classes.active]: true
    // [classes.active]: 
  }, [])

  const classNamesChat = classNames(classes.chat, {
    // [classes.open]: isChatActive
    [classes.open]: true
  }, [])

  return (
    <div className={classNamesChatbot}>
      <div>
        <button className={classes.chatbotOpen}>
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
            <div className={classes.messageBot}>
              {data.firstMessage}
            </div>
            <div className={classes.messageBot}>
              <ol className={classes.list}>
                {data.faqs.map((faq) =>
                  <li className={classes.item} key={faq.id}>
                    {faq.question}
                  </li>
                )}
              </ol>
              <span className={classes.messageDate}></span>
            </div>
          </div>
          <footer className={classes.footer}>
            <form className={classes.form}>
              <label className={classes.input}>
                <input type="text" placeholder="Message..." value></input>
              </label>
              <button>
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