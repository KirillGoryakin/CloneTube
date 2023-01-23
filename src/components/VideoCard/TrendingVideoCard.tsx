import { TrendingVideoInfo } from 'appTypes';
import { Link } from 'react-router-dom';
import { formatViews } from 'utils';
import style from './trending.module.scss';

type Props = {
  video: TrendingVideoInfo;
};

const TrendingVideoCard: React.FC<Props> = ({ video }) => {
  const {
    videoId,
    channelId,
    thumbnail,
    lengthText,
    title,
    channelThumbnail,
    channelTitle,
    viewCount,
    publishedText,
  } = video;

  return (
    <Link
      className={style.videoCard}
      to={`/video/${videoId}`}
    >
      <div className={style.thumbnail}>
        <img
          src={thumbnail.slice(-1)[0].url}
          alt='Thumbnail'
        />

        <div className={style.videoLength}>{lengthText}</div>
      </div>

      <div className={style.videoMeta}>
        <Link
          className={style.avatar}
          to={`/channel/${channelId}`}
        >
          <img
            src={channelThumbnail.slice(-1)[0].url}
            alt='Avatar'
          />
        </Link>

        <div>
          <div className={style.title}>{title}</div>
          <Link
            className={style.channelTitle}
            to={`/channel/${channelId}`}
          >
            {channelTitle}
          </Link>

          <div className={style.viewsAndDate}>
            {`${formatViews(Number(viewCount))} views • ${publishedText}`}
          </div>
        </div>
      </div>
    </Link>
  );
}

export { TrendingVideoCard };