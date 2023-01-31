import { ChannelInfo } from 'appTypes';
import style from './style.module.scss';
import { motion } from 'framer-motion';

type Props = {
  channel: ChannelInfo | undefined;
};

const TopBar: React.FC<Props> = ({ channel }) => {
  return (
    <motion.div
      className={style.topbar}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
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
    </motion.div>
  );
};

export { TopBar };