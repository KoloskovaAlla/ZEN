import Title from 'components/common/Title'
import Text from 'components/common/Text'
// import Image from 'components/common/Image'
import Preview from '../../common/Preview/Preview'
import BrandLink from './components/BrandLink'
import classes from './SectionBase.module.scss'
import { classNames } from 'utils/helpers'
import { useRef } from 'react'


const SectionBase = ({ data, reverse }) => {
  const classNameBody = classNames(classes.body, {
    [classes.reverse]: reverse,
  }, [])

  const { title, name } = data
  // console.log(name)

  return (
    <section id={name} className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classNameBody}>

          {title && (
            <Title
              className={classes.title}
              priority={title.priority}
            >
              {title.content}
            </Title>
          )}

          {data.texts?.length > 0 && (
            data.texts.map((text, index) =>
              <Text
                text={text}
                className={classes.copy}
                key={`${index}`}
              />)
          )}

          <ul className={classes.links}>
            {data.links?.length > 0 && (
              data.links.map((link, index) => <BrandLink
                link={link}
                key={`${index}`}
              />)
            )}
          </ul>
        </div>

        {/* {data.image && (
          <Image
            className={classes.image}
            imageData={data.image}
          />)
        } */}

        <Preview imageData={data.image}
        />
      </div>
    </section>
  )
}

export default SectionBase