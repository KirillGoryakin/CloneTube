
export interface Thumbnail {
  url: string;
  width: number;
  height: number;
};

export interface VideoInfo {
  id: string;
  title: string;
  lengthSeconds: string;
  keywords: string[];
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: Thumbnail[];
  allowRatings: boolean;
  viewCount: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  category: string;
  publishDate: string;
  uploadDate: string;
};

export interface TrendingVideoInfo {
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

export interface RelatedVideoInfo {
  type: string;
  videoId: string;
  title: string;
  lengthText: string;
  viewCount: string;
  publishedTimeText: string;
  thumbnail: Thumbnail[];
  channelTitle: string;
  channelId: string;
  authorThumbnail: Thumbnail[];
};