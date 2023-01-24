import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import style from './style.module.scss';
import { ChannelInfo, RelatedVideoInfo, VideoInfo } from 'appTypes';
import { getOptions } from 'utils';
import { RelatedVideoCard } from 'components/VideoCard/RelatedVideoCard';
import { VideoBlock } from './VideoBlock';

const VideoPage = () => {
  const params = useParams();
  const { videoId } = params;

  const [videoInfo, setVideoInfo] = useState<VideoInfo>();
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoInfo[]>();
  const [channel, setChannel] = useState<ChannelInfo>();

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const { data } = await axios.request(
        getOptions('video', { id: videoId }));
      setVideoInfo(data);
    }

    const fetchRelatedVideos = async () => {
      const { data } = await axios.request(
        getOptions('related', { id: videoId }));
      setRelatedVideos(data.data);
    };

    fetchVideoInfo();
    fetchRelatedVideos();
  }, [videoId]);

  useEffect(() => {
    const fetchChannel = async (channelId: string) => {
      const { data } = await axios.request(
        getOptions('channel', { id: channelId }));
      setChannel(data);
    }

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

      <div className={style.relatedVideos}>
        {relatedVideos?.map(video => (
          <RelatedVideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}

export { VideoPage };