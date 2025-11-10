import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { setQuery, setPage, fetchAnime } from '../redux/searchSlice';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setQuery(input));
      dispatch(setPage(1));
      dispatch(fetchAnime({ query: input, page: 1 }));
    }, 250);

    return () => clearTimeout(timer);
  }, [input, dispatch]);

  return (
    <div className='search-bar-container'>
      <input
        type="text"
        placeholder="Search anime titles..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className='search-input'
      />
    </div>
  );
}
