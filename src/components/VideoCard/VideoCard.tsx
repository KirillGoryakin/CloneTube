import { ChannelVideoInfo, RelatedVideoInfo, TrendingVideoInfo } from 'appTypes';
import { RelatedVideoCard } from './RelatedVideoCard';
import { TrendingVideoCard } from './TrendingVideoCard';
import { ChannelVideoCard } from './ChannelVideoCard';

type Trending = {
  video: TrendingVideoInfo;
  variant: 'trending';
};

type Related = {
  video: RelatedVideoInfo;
  variant: 'related';
};

type Channel = {
  video: ChannelVideoInfo;
  variant: 'channel';
};

type Props = Trending | Related | Channel;

const VideoCard: React.FC<Props> = ({ variant, video }) => {
  if (variant === 'trending')
    return <TrendingVideoCard video={video} />
  
  if (variant === 'related')
    return <RelatedVideoCard video={video} />

  if (variant === 'channel')
    return <ChannelVideoCard video={video} />

  return null;
}

export { VideoCard };