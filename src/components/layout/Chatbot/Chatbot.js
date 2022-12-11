import classes from './Chatbot.module.scss'
import chatbot from './assets/Chatbot.gif'
import {classNames} from 'utils/helpers'
import Logo from './components/Logo/Logo.js'

const Chatbot = () => {
  const classNamesChat = classNames (classes.chat, {
    // [classes.open]: isChatActive
    [classes.open]: true
  }, [])

  return (
    <div>
      <div>
        <button className={classes.chatbotOpen}>
         <img src={chatbot}/>
        </button>
        <div className={classNamesChat}>
          <header className={classes.header}>
            <div className={classes.logo}>{Logo()}</div>
          </header>
          <div className={classes.body}></div>
          <footer className={classes.footer}></footer>
        </div>
      </div>
    </div>
  )
}
export default Chatbot