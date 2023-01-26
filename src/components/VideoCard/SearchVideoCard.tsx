import { SearchVideoInfo } from 'appTypes';
import { Link } from 'react-router-dom';
import { formatNumber } from 'utils';
import style from './search.module.scss';

type Props = {
  video: SearchVideoInfo;
};

const SearchVideoCard: React.FC<Props> = ({ video }) => {
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
    description,
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
          className={style.title}
          to={`/video/${videoId}`}
        >
          {title}
        </Link>

        <Link
          className={style.viewsAndDate}
          to={`/video/${videoId}`}
        >
          {`${formatNumber(Number(viewCount))} views • ${publishedText}`}
        </Link>
        
        <div className={style.channel}>
          <Link
            className={style.channelAvatar}
            to={`/channel/${channelId}`}
          >
            <img src={channelThumbnail.slice(-1)[0].url} alt='Avatar' />
          </Link>
          <Link
            className={style.channelTitle}
            to={`/channel/${channelId}`}
          >
            {channelTitle}
          </Link>
        </div>

        <div className={style.description}>
          {description}
        </div>
      </div>
    </div>
  );
}

export { SearchVideoCard };