export type MovieType = {
  media_type: string;
  adult?: boolean | undefined;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string | undefined;
  title?: string | undefined;
  video?: boolean;
  original_name: string;
  vote_average: number;
  vote_count: number;
};

export enum GenreType {
  fetchTrending = "fetchTrending",
  fetchTopRated = "fetchTopRated",
  fetchActionsMovies = "fetchActionsMovies",
  fetchComedyMovies = "fetchComedyMovies",
  fetchHorrorMovies = "fetchHorrorMovies",
  fetchRomanceMovies = "fetchRomanceMovies",
  fetchMystery = "fetchMystery",
  fetchSciFi = "fetchSciFi",
  fetchWestern = "fetchWestern",
  fetchAnimation = "fetchAnimation",
  fetchTV = "fetchTV",
}
