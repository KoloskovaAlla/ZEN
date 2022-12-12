import classes from './Chatbot.module.scss'
import chatbot from './assets/chatbot.gif'
import { classNames } from 'utils/helpers'
// import Logo from './components/Logo/Logo.js'
import { ReactComponent as Logo } from './assets/logo.svg'


const Chatbot = () => {
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
          </header>
          <div className={classes.body}></div>
          <footer className={classes.footer}></footer>
        </div>
      </div>
    </div>
  )
}
export default Chatbot