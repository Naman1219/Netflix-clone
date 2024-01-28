export interface Genre {
  id: number
  name: string
}

export interface Movie {
  adult?: boolean
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: number[]
  id?: number
  media_type?: string
  name?: string
  origin_country?: string[]
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video? : boolean
  vote_average?: number
  vote_count?: number
}

export interface Element {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}