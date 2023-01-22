
export interface Thumbnail {
  url: string;
  width: number;
  height: number;
};

export interface Video {
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  description: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  channelThumbnail: Thumbnail[];
};