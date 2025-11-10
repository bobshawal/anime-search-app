import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeDetail } from '../redux/detailSlice';
import { RootState, AppDispatch } from '../redux/store';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { detail, loading, error } = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    if (id) dispatch(fetchAnimeDetail(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div style={styles.centered}>
        <LoadingSkeleton />
      </div>
    );
  }
  if (error) return <p style={styles.error}>Error: {error}</p>;
  if (!detail) return <p style={styles.empty}>No detail found.</p>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>← Back</button>
      <div style={styles.card}>
        <img src={detail.images.jpg.image_url} alt={detail.title} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.title}>{detail.title}</h2>
          <p style={styles.synopsis}>{detail.synopsis}</p>
          <div style={styles.meta}>
            <p>Episodes: {detail.episodes}</p>
            <p>Score: {detail.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  backButton: {
    marginBottom: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover' as const,
    borderRadius: '8px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  synopsis: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
  },
  meta: {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    color: '#555',
  },
  error: {
    color: 'red',
    textAlign: 'center' as const,
    marginTop: '40px',
  },
  empty: {
    textAlign: 'center' as const,
    marginTop: '40px',
    fontStyle: 'italic',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px', // or '100vh' if you want full-page centering
  },
};
