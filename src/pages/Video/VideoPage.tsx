import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import style from './style.module.scss';
import { motion, Variants } from 'framer-motion';
import { ChannelInfo, RelatedVideoInfo, VideoInfo } from 'appTypes';
import { getOptions } from 'utils';
import { VideoBlock } from './VideoBlock';
import { VideoCard } from 'components/VideoCard';

const VideoPage = () => {
  const params = useParams();
  const { videoId } = params;

  const [videoInfo, setVideoInfo] = useState<VideoInfo>();
  const [relatedVideos, setRelatedVideos] =
    useState<RelatedVideoInfo[] | null>();
  const [channel, setChannel] = useState<ChannelInfo>();

  const relatedVideosVariants: Variants = {
    'initial': {},
    'animate': {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const { data } = await axios.request(
        getOptions('video', { id: videoId }));
      setVideoInfo(data);
    };

    const fetchRelatedVideos = async () => {
      const { data } = await axios.request(
        getOptions('related', { id: videoId }));
      setRelatedVideos(data.data);
    };

    setRelatedVideos(null);
    
    fetchVideoInfo();
    fetchRelatedVideos();

    window.scrollTo(0, 0);
  }, [videoId]);

  useEffect(() => {
    const fetchChannel = async (channelId: string) => {
      const { data } = await axios.request(
        getOptions('channel', { id: channelId }));
      setChannel(data);
    };

    if (videoInfo?.channelId)
      fetchChannel(videoInfo.channelId);
  }, [videoInfo]);
  
  return (
    <div className={style.pageWrap}>
      <VideoBlock
        videoId={videoId}
        videoInfo={videoInfo}
        channel={channel}
      />

      {relatedVideos && (
        <motion.div
          className={style.relatedVideos}
          variants={relatedVideosVariants}
          initial='initial'
          animate='animate'
        >
          {relatedVideos?.map(video => (
            <VideoCard key={video.videoId} video={video} variant='related' />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export { VideoPage };