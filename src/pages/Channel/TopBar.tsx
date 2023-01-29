import { ChannelInfo } from 'appTypes';
import style from './style.module.scss';

type Props = {
  channel: ChannelInfo | undefined;
};

const TopBar: React.FC<Props> = ({ channel }) => {
  return (
    <div className={style.topbar}>
      <div className={style.avatar}>
        <img src={channel?.meta.thumbnail.slice(-1)[0].url} alt='Avatar' />
      </div>

      <div className={style.meta}>
        <div className={style.title}>
          {channel?.meta.title}
        </div>
        <div className={style.subscribers}>
          {`${channel?.meta.subscriberCount} subscribers`}
        </div>
      </div>
    </div>
  );
};

export { TopBar };