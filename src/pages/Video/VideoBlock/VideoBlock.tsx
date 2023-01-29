import { ChannelInfo, VideoInfo } from 'appTypes';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { Comments } from './Comments';
import style from './style.module.scss';

type Props = {
  videoId: string | undefined;
  videoInfo: VideoInfo | undefined;
  channel: ChannelInfo | undefined;
};

const VideoBlock: React.FC<Props> = (props) => {
  const {
    videoId,
    videoInfo,
    channel,
  } = props;
  
  return (
    <div className={style.videoBlock}>
      <YouTube
        className={style.video}
        videoId={videoId}
      />

      <div className={style.videoMeta}>
        <div className={style.videoTitle}>{videoInfo?.title}</div>

        <Link
          className={style.channel}
          to={`/channel/${videoInfo?.channelId}`}
        >
          <img
            className={style.avatar}
            src={channel?.meta.thumbnail.slice(-1)[0].url}
            alt='Avatar'
          />

          <div className={style.channelMeta}>
            <div className={style.title}>
              {channel?.meta.title}
            </div>
            <div className={style.subscribers}>
              {`${channel?.meta.subscriberCount} subscribers`}
            </div>
          </div>
        </Link>

        <div className={style.description}>
          {videoInfo?.description}
        </div>
      </div>

      <Comments videoId={videoId} />
    </div>
  );
};

export { VideoBlock };