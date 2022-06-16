export interface Video {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  youTubeVideoId: string;
  title: string;
  description: string;
  fullUrl: string;
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}
export interface Comment {
  filmId: string;
  message: string;
  date: Date;
}
