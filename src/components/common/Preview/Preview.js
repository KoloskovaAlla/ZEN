import { useContext, useEffect } from 'react';
import SliderContext from 'contexts/SliderContext';
import PreviewContext from 'contexts/PreviewContext';
import classes from './Preview.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSlides } from 'reducers/sliderSlice';
import { setIsDarkClicked, setPreviewDetails } from 'reducers/previewSlice';

const Preview = ({ imageData }) => {
  // const { setIsDarkClicked } = useContext(PreviewContext);
  
  // const slide = {
  //   id: imageData.id,
  //   source: imageData.source,
  //   description: imageData.alternate
  // }

  // const {setSlides} = useContext(SliderContext)

  const dispatch = useDispatch();

  useEffect(() => {
    // setSlides((slides) => [...slides, imageData]);
    dispatch(setSlides(imageData));
  }, [imageData, setSlides]);

  // const { setPreviewDetails } = useContext(PreviewContext);

  const handlePreviewClick = (event) => {
    dispatch(setIsDarkClicked(false));
    const details = event.currentTarget.getBoundingClientRect();

    const x = details.left;
    const width = details.width;

    const y = details.top;
    const height = details.height;

    const description = imageData.alternate;
    const id = imageData.id;

    dispatch(setPreviewDetails({
      x,
      y,
      width,
      height,
      description,
      id,
    }));
  };

  return (
    <button
      onClick={handlePreviewClick}
      className={classes.preview}
      type='button'
    >
      <img
        src={imageData?.source && imageData.source}
        alt={imageData?.alternate && imageData.alternate}
      />
    </button>
  );
};

export default Preview;
