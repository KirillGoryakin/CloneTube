import { SearchInfo } from 'appTypes';
import style from './style.module.scss';
import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatNumber, getOptions } from 'utils';
import { VideoCard } from 'components/VideoCard';

const SearchPage = () => {
  const [params] = useSearchParams();
  const [search, setSearch] = useState<SearchInfo>();

  const searchVideosVariants: Variants = {
    'initial': {},
    'animate': {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios(
        getOptions('search', {
          query: params.get('s'),
          type: 'video',
        }));
      
      setSearch(data);
    };
    
    fetchVideos();
  }, [params]);
  
  return (
    <div className={style.search}>
      <div className={style.results}>
        { search?.estimatedResults
          ? `${formatNumber(Number(search.estimatedResults))} results`
          : '0 results' }
      </div>

      {search?.data &&
        <motion.div
          className={style.videos}
          variants={searchVideosVariants}
          initial='initial'
          animate='animate'
        >
          {search?.data.filter(({ type }) => type === 'video').map(video => (
            <VideoCard key={video.videoId} video={video} variant='search' />
          ))}
        </motion.div>
      }
    </div>
  );
};

export { SearchPage };