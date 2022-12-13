export interface Movies {
  Search: Movie[];
  totalResults: number;
  Response: boolean;
  Error?: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
