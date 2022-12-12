import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import {classNames} from 'utils/helpers'
// import Logo from './components/Logo/Logo.js'
import {ReactComponent as Logo} from './assets/logo.svg'
import {ReactComponent as Close} from './assets/close.svg'


const Chatbot = ({data}) => {
  const classNamesChat = classNames(classes.chat, {
    // [classes.open]: isChatActive
    [classes.open]: true
  }, [])

  return (
    <div>
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
            </div>
          </div>
          <footer className={classes.footer}></footer>
        </div>
      </div>
    </div>
  )
}
export default Chatbot