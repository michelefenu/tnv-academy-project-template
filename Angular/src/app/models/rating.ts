export interface Rating {
    id?: string,
    userId: string,
    movieId: string,
    posterPath: string,
    movieTitle: string,
    movieOverview: string,
    movieReleaseDate: string,
    review: string,
    rating: number
}
