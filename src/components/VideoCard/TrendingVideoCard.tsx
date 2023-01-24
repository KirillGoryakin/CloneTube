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
    <div className={style.videoCard}>
      <Link
        className={style.thumbnail}
        to={`/video/${videoId}`}
      >
        <img
          src={thumbnail.slice(-1)[0].url}
          alt='Thumbnail'
        />

        <div className={style.videoLength}>{lengthText}</div>
      </Link>

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
          <Link
            className={style.title}
            to={`/video/${videoId}`}
          >
            {title}
          </Link>
          <Link
            className={style.channelTitle}
            to={`/channel/${channelId}`}
          >
            {channelTitle}
          </Link>

          <Link
            className={style.viewsAndDate}
            to={`/video/${videoId}`}
          >
            {`${formatViews(Number(viewCount))} views • ${publishedText}`}
          </Link>
        </div>
      </div>
    </div>
  );
}

export { TrendingVideoCard };