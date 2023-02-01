import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingVideoInfo } from 'appTypes';
import style from './style.module.scss';
import { VideoCard } from 'components/VideoCard';
import { getOptions } from 'utils';

const HomePage = () => {
  const [videos, setVideos] = useState<TrendingVideoInfo[]>();

  const videosVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios(
        getOptions('trending', { geo: 'US' }));

      setVideos(data.data);
    };

    fetchVideos();
  }, []);
  
  if (!videos) return null;
  
  return (
    <motion.div
      className={style.videoGrid}
      variants={videosVariants}
      initial='initial'
      animate='animate'
    >
      {videos.map(video => (
        <VideoCard key={video.videoId} video={video} variant='trending' />
      ))}
    </motion.div>
  );
};

export { HomePage };