import { Link } from 'react-router-dom';
import { Anime } from '../types/anime';

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className='anime-card'>
      <Link to={`/anime/${anime.mal_id}`} className='card-link'>
        <img src={anime.images.jpg.image_url} alt={anime.title} className='card-image' />
        <h3 className='card-title'>{anime.title}</h3>
      </Link>
    </div>
  );
}
