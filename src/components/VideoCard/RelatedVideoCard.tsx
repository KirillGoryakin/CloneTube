import { RelatedVideoInfo } from 'appTypes';
import { Link } from 'react-router-dom';
import { formatViews } from 'utils';
import style from './related.module.scss';

type Props = {
  video: RelatedVideoInfo;
};

const RelatedVideoCard: React.FC<Props> = ({ video }) => {
  const {
    videoId,
    channelId,
    thumbnail,
    lengthText,
    title,
    channelTitle,
    viewCount,
    publishedTimeText,
  } = video;

  return (
    <Link
      className={style.videoCard}
      to={`/video/${videoId}`}
    >
      <div className={style.thumbnail}>
        <img
          src={thumbnail.pop()?.url}
          alt='Thumbnail'
        />

        <div className={style.videoLength}>{lengthText}</div>
      </div>

      <div className={style.videoMeta}>
        <div>
          <div className={style.title}>{title}</div>
          <Link
            className={style.channelTitle}
            to={`/channel/${channelId}`}
          >
            {channelTitle}
          </Link>

          <div className={style.viewsAndDate}>
            {`${formatViews(Number(viewCount))} views • ${publishedTimeText}`}
          </div>
        </div>
      </div>
    </Link>
  );
}

export { RelatedVideoCard };