import axios from 'axios';
import style from './style.module.scss';
import { motion } from 'framer-motion';
import { ChannelInfo } from 'appTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOptions } from 'utils';
import { TopBar } from './TopBar';
import { ChannelVideos } from './ChannelVideos';

const ChannelPage = () => {
  const params = useParams();
  const { channelId } = params;

  const [channel, setChannel] = useState<ChannelInfo>();

  useEffect(() => {
    const fetchChannel = async () => {
      const { data } = await axios(
        getOptions('channel', { id: channelId }));

      setChannel(data);
    };

    fetchChannel();
  }, [channelId]);
  
  return (
    <div className={style.channel}>
      <motion.img
        className={style.banner}
        src={channel?.meta.image.banner.slice(-1)[0].url}
        alt='Banner'
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      />

      <TopBar channel={channel} />

      <ChannelVideos videos={channel?.data} />
    </div>
  );
};

export { ChannelPage };