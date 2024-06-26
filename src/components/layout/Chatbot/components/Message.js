import classes from './Message.module.scss'
import {classNames} from 'utils/helpers'

const Message = ({message, setIsQuestionAsked, setAskedQuestion, setIsLastMessageUser, setIsTypedQuestion, setSendingMessageTriggerType, contentList}) => {
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
    setSendingMessageTriggerType('click')
    // setIsQuestionAsked(true)
    setAskedQuestion(event.target.innerHTML)  
    setIsLastMessageUser(true)   

  }
  
  if (author === 'bot' && type === 'list') {
    return (
      <div className={classNamesMessage}>
        <ol>
          {contentList.map((contentItem, index) => {                
            return <li onClick={handleQuestionClick} className={classes.item} key={index}>
              <span>{`${contentItem.id}. `}</span>
              <button>{contentItem.question}</button>
            </li>
          })}
        </ol>
      </div>
    )
  }

  if (type==='preview') {   
    return (
      <div className={classNamesMessage}>
        {content?.imageSource && (
          <button>
            <img src={content.imageSource} alt='alternate img'></img>
          </button>
        )}
        {content?.title && (
          <button className={classes.title}>{content.title}</button>
        )}
        {content?.article && (
          <div>{content.article.slice(0, 100)}...</div>
        )}
        {content?.link && (
        <button className={classes.link}>{content.link}</button>
        )}
        {content?.text && (
          <div>{content.text}</div>
        )}
      </div>
    );
  }
}

export default Message