import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import Pagination from '../components/Pagination';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function SearchPage() {
  const { results, loading, error } = useSelector((state: RootState) => state.search);

  return (
    <div>
      <SearchBar />
      {loading && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[...Array(6)].map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {results.length === 0 && <p>No results found.</p>}
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
        {results.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
