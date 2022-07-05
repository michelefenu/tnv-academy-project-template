export interface CommentRequest {
  userId: number;
  movieId: number;
  userComment: string;
}
export interface CommentResponse {
  id: number;
  userId: number;
  movieId: number;
  userComment: string;
}
