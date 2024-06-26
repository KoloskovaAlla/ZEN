import classes from './Chatbot.module.scss';
import chatbot from './assets/chatbot.gif';
import { classNames } from 'utils/helpers';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { useEffect, useState, useRef } from 'react';
import Message from './components/Message';

const Chatbot = ({ data }) => {
  const { posts, faqs } = data;

  const [isTyping, setIsTyping] = useState(true);
  const [isChatActive, setIsChatActive] = useState(null);
  // const [isQuestionAsked, setIsQuestionAsked] = useState(false)
  const [askedQuestion, setAskedQuestion] = useState('');
  const [isLastMessageUser, setIsLastMessageUser] = useState(false);
  // const [isTypedQuestion, setIsTypedQuestion] = useState(false)
  const [sendingMessageTriggerType, setSendingMessageTriggerType] =
    useState('');

  const classNamesChatbot = classNames(
    classes.chatbot,
    {
      [classes.active]: isChatActive,
    },
    []
  );

  const classNamesChat = classNames(
    classes.chat,
    {
      [classes.open]: isChatActive,
    },
    []
  );

  const classNamesSubmit = classNames(
    classes.submit,
    {
      [classes.disabled]: true,
    },
    []
  );

  const chatbotRef = useRef(null);
  const chatbotHeaderRef = useRef(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  //   //       setTimeout(() => {
  //   //         chatbotRef.current.append(answerMessages)
  //   //         chatbotRef.current.scrollTo(0, scrollHeight + answerMessages.scrollHeight, {behavior: 'smooth'})
  //   //         setIsTyping(false)
  //   //       }, 2000)

  let scrollHeight;

  const addMessage = (author, content, type) => {
    setMessages((messages) => [
      ...messages,
      {
        author,
        content,
        type,
      },
    ]);
  };

  const handleQuestionChange = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSendingMessageTriggerType('input');
    setIsLastMessageUser(true);
    setAskedQuestion(userQuestion);
  };

  const contentList = faqs.map((faq) => {
    return {
      id: faq.id,
      question: faq.question,
    };
  });

  useEffect(() => {
    const printMessage = () => {
      let list = [];
      list = faqs.map((faq) => faq.question);

      if (messages.length === 0 && isChatActive) {
        setIsTyping(true);
        setTimeout(() => {
          addMessage('bot', data.firstMessage, 'text');
          console.log('test1');
          setIsTyping(false);
        }, 1000);
      }

      if (messages.length === 1) {
        setIsTyping(true);
        setTimeout(() => {
          addMessage('bot', list, 'list');
          setIsTyping(false);
        }, 1000);
      }

      if (messages.length === 2) setIsTyping(false);

      if (isLastMessageUser) {
        addMessage('user', askedQuestion, 'text');
        setIsLastMessageUser(false);
      }

      if (sendingMessageTriggerType === 'click' && isLastMessageUser) {
        faqs.forEach((faq) => {
          if (faq.question === askedQuestion) {
            setIsTyping(true);
            setTimeout(() => {
              addMessage('bot', faq.answer, 'text');
              console.log('test2');
              setIsTyping(false);
            }, 1000);
          }
        });
        setIsLastMessageUser(false);
      }

      if (sendingMessageTriggerType === 'input' && isLastMessageUser) {
        const userKeywords = userQuestion.split(' ');
        let content=null;
        // let link
        userKeywords.forEach((userKeyword) => {
          posts.forEach((post) => {
            const postKeywordString = post.keywords.join(' ');           
            if (postKeywordString.includes(userKeyword)) {
              content = {
                link: `https://zenproject-ce905.web.app/posts/${post.id}`,
                imageSource: post.imageSource,
                article: post.article,
                title: post.title,
              };
            }
          });
        });
        console.log(content)
        if (!content) {content={
          text: 'Наш сотрудник скоро свяжется с вами и ответ на все ваши вопросы'
        }}
        setIsTyping(true);
        setTimeout(() => {
          addMessage('bot', content, 'preview');
          setIsTyping(false);
        }, 1000);

        // addMessage('bot', link, 'text')
        setIsLastMessageUser(false);
      }

      scrollHeight = chatbotRef.current.scrollHeight;
      chatbotRef.current.scrollTo(0, scrollHeight, { behavior: 'smooth' });
    };
    printMessage();
  }, [isChatActive, messages, scrollHeight, askedQuestion, isLastMessageUser]);

  const handleCloseClick = () => {
    setIsChatActive(false);
  };

  const handleChatbotClick = () => {
    setIsChatActive(false);
  };

  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={classNamesChatbot} onClick={handleChatbotClick}>
      <div onClick={handleBodyClick}>
        <button
          onClick={() => {
            setIsChatActive(true);
          }}
          className={classes.chatbotOpen}
        >
          <img src={chatbot} alt='' />
        </button>
        <div className={classNamesChat}>
          <header className={classes.header}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <div ref={chatbotHeaderRef} className={classes.notice}>
              {isTyping && <span>...typing</span>}
              {!isTyping && <span>online</span>}
            </div>
            <button onClick={handleCloseClick} className={classes.close}>
              <Close />
            </button>
          </header>
          <div ref={chatbotRef} className={classes.body}>
            {messages.map((message) => (
              <Message
                message={message}
                // setIsQuestionAsked={setIsQuestionAsked}
                setAskedQuestion={setAskedQuestion}
                setIsLastMessageUser={setIsLastMessageUser}
                askedQuestion={askedQuestion}
                // setIsTypedQuestion={setIsTypedQuestion}
                contentList={contentList}
                setSendingMessageTriggerType={setSendingMessageTriggerType}
              />
            ))}
          </div>
          <footer className={classes.footer}>
            <form onSubmit={handleFormSubmit} className={classes.form}>
              <label className={classes.input}>
                <input
                  onChange={handleQuestionChange}
                  type='text'
                  placeholder='Message...'
                  value={userQuestion}
                ></input>
              </label>
              <button type='submit' className={classNamesSubmit}>
                <Arrow />
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Chatbot;
