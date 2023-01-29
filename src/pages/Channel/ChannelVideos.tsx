import { ChannelVideoInfo } from 'appTypes';
import { VideoCard } from 'components/VideoCard';
import style from './style.module.scss';

type Props = {
  videos: ChannelVideoInfo[] | undefined;
};

const ChannelVideos: React.FC<Props> = ({ videos }) => {
  return (
    <div className={style.videos}>
      {videos?.map(video => (
        <VideoCard key={video.videoId} video={video} variant='channel' />
      ))}
    </div>
  );
};

export { ChannelVideos };