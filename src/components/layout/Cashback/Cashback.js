import Title from '../../common/Title'
import Text from '../../common/Text'
import Button from './components/Button'
import classes from './Cashback.module.scss'

const Cashback = ({ data}) => { 

  return (
    <section className={classes.cashback}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          {data.title && (
            <Title 
              priority={data.title.priority} 
              className={classes.title} 
              children={data.title.content} 
            />)}

          {data.texts?.length > 0 && (
            data.texts.map((text, index) => 
            <Text 
              text={text} 
              className={classes.copy} 
              key={`${index}`} 
            />)
          )}

          <Button
            buttonText={data.buttonText}                
          />
        </div>
      </div>
    </section>
  )
}

export default Cashback