import { RelatedVideoInfo, TrendingVideoInfo } from 'appTypes';
import { RelatedVideoCard } from './RelatedVideoCard';
import { TrendingVideoCard } from './TrendingVideoCard';

type Trending = {
  video: TrendingVideoInfo;
  variant: 'trending';
};

type Related = {
  video: RelatedVideoInfo;
  variant: 'related';
};

type Props = Trending | Related;

const VideoCard: React.FC<Props> = ({ variant, video }) => {
  if (variant === 'trending')
    return <TrendingVideoCard video={video} />
  
  if (variant === 'related')
    return <RelatedVideoCard video={video} />

  return null;
}

export { VideoCard };