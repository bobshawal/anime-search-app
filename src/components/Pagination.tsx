import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setPage, fetchAnime } from '../redux/searchSlice';

export default function Pagination() {
  const dispatch = useDispatch<any>();
  const { query, page } = useSelector((state: RootState) => state.search);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(fetchAnime({ query, page: newPage }));
  };

  return (
    <div className='pagination-container'>
      <button
        className='pagination-button'
        disabled={page <= 1} 
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>
      <span className='pagination-label'>Page {page}</span>
      <button 
        className='pagination-button'
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
