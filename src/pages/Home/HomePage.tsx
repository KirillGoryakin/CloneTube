import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingVideoInfo } from 'appTypes';
import style from './style.module.scss';
import { VideoCard } from 'components/VideoCard';

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
      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/trending',
        params: { geo: 'US' },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST,
        },
      };

      const { data } = await axios.request(options);
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