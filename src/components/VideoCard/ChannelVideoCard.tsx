import { ChannelVideoInfo } from 'appTypes';
import { Link } from 'react-router-dom';
import { formatNumber } from 'utils';
import style from './channel.module.scss';

type Props = {
  video: ChannelVideoInfo;
};

const ChannelVideoCard: React.FC<Props> = ({ video }) => {
  const {
    videoId,
    thumbnail,
    lengthText,
    title,
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
      </div>
    </div>
  );
}

export { ChannelVideoCard };