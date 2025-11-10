import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div style={styles.card}>
      <div style={styles.image} />
      <div style={styles.text} />
      <div style={styles.textShort} />
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    height: '300px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    animation: 'pulse 1.5s infinite',
  },
  image: {
    width: '100%',
    height: '180px',
    backgroundColor: '#ddd',
    borderRadius: '4px',
  },
  text: {
    width: '80%',
    height: '20px',
    backgroundColor: '#ccc',
    borderRadius: '4px',
  },
  textShort: {
    width: '60%',
    height: '20px',
    backgroundColor: '#ccc',
    borderRadius: '4px',
  },
};
