export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  episodes: number;
  score: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}
