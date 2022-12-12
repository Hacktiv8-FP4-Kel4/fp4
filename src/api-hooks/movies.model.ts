export interface Movies {
  Search: Movie[];
  totalResults: number;
  Response: boolean;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
