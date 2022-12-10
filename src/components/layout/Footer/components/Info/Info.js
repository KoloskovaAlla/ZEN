import Logo from './components/Logo'
import Text from 'components/common/Text'
import Developer from './components/Developer'
import classes from './Info.module.scss'


const Info = ({ infoData, parentClassName }) => {

  const { texts, developer } = infoData

  return (
    <div className={classes.info}>
      <Logo />

      {texts?.length > 0 && (
        texts.map((text, index) =>
          <Text
            text={text}
            className={classes.copy}
            key={`${index}`}
          />)
      )}

      {developer && (
        <Developer
          developer={developer}
          parentClassName={parentClassName}
        />
      )}
    </div>
  )

}

export default Info