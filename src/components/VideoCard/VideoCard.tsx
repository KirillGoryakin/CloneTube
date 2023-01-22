import { Video } from 'appTypes';
import { formatViews } from 'utils';
import style from './style.module.scss';

type Props = {
  video: Video;
};

const VideoCard: React.FC<Props> = ({ video }) => {
  const {
    thumbnail,
    lengthText,
    title,
    channelThumbnail,
    channelTitle,
    viewCount,
    publishedText,
  } = video;
  
  return (
    <div className={style.videoCard}>
      <div className={style.thumbnail}>
        <img
          src={thumbnail.pop()?.url}
          alt='Thumbnail'
        />

        <div className={style.videoLength}>{lengthText}</div>
      </div>

      <div className={style.videoMeta}>
        <img
          className={style.avatar}
          src={channelThumbnail.pop()?.url}
          alt='Avatar'
        />

        <div>
          <div className={style.title}>{title}</div>
          <div className={style.channelTitle}>{channelTitle}</div>

          <div className={style.viewsAndDate}>
            {`${formatViews(Number(viewCount))} views • ${publishedText}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };