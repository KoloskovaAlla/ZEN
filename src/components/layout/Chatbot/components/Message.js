import classes from './Message.module.scss'
import {classNames} from 'utils/helpers'

const Message = ({message, isMessageBot, isMessageUser}) => {
  const classNamesMessage = classNames(classes.message, {
    [classes.bot]: isMessageBot,
    [classes.user]: isMessageUser
  }, [])
  const {author, content, type} = message
  // console.log(message)
  if (author === 'bot' && type==='text') {
    return (
      <div className={classNamesMessage}>
        {content}
      </div>
    )
  }

  if (author === 'bot' && type === 'list') {
    // console.log(content)
    return (
      <div className={classNamesMessage}>
       <ol>
        {content.map((item) => {
          console.log(item)
          const question = item[0]
          return <li key={question}>{question}</li>
        })}
       </ol>
      </div>
    )
  }

}

export default Message