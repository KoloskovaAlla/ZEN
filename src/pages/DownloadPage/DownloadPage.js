import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';

const DownloadPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage('downloadPage'));
  }, []);

  return <div>DownloadPage Title</div>;
};

export default DownloadPage;
