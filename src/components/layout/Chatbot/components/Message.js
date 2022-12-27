import classes from './Message.module.scss'
import {classNames} from 'utils/helpers'

const Message = ({message, setIsQuestionAsked, setAskedQuestion, setIsLastMessageUser, askedQuestion}) => {
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
    console.log()
    setAskedQuestion(event.target.innerHTML)  
  }
  let id = 0
  if (author === 'bot' && type === 'list') {
    return (
      <div className={classNamesMessage}>
        <ol>
          {content.map((question) => {        
            id++
            return <li onClick={handleQuestionClick} className={classes.item} key={id}>
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