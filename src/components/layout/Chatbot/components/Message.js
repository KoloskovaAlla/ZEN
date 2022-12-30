import classes from './Message.module.scss'
import {classNames} from 'utils/helpers'

const Message = ({message, setIsQuestionAsked, setAskedQuestion, setIsLastMessageUser, setIsTypedQuestion}) => {
  const {author, content, type} = message
  const classNamesMessage = classNames(classes.message, {
    [classes.bot]: author === 'bot',
    [classes.user]: author === 'user'
  }, [])

  if (type === 'text') {
    return (
      <div className={classNamesMessage}>
        {content}
      </div>
    )
  }
  const handleQuestionClick = (event) => {
    setIsQuestionAsked(true)
    setIsLastMessageUser(true)   
    setAskedQuestion(event.target.innerHTML)  
    setIsTypedQuestion(false)
  }
  let id = 0
  if (author === 'bot' && type === 'list') {
    return (
      <div className={classNamesMessage}>
        <ol>
          {content.map((question, index) => {        
            id++
            return <li onClick={handleQuestionClick} className={classes.item} key={index}>
              <span>{`${id}. `}</span>
              <button>{question}</button>
            </li>
          })}
        </ol>
      </div>
    )
  }



}

export default Message