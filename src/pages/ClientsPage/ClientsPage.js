import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';

const ClientsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage('clientsPage'));
  }, []);

  return <h2>ClientsPage Title</h2>;
};

export default ClientsPage;
