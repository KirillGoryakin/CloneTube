import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import YouTube from 'react-youtube';
import style from './style.module.scss';
import { RelatedVideoInfo, VideoInfo } from 'appTypes';

const VideoPage = () => {
  const params = useParams();
  const { videoId } = params;

  const [videoInfo, setVideoInfo] = useState<VideoInfo>();
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoInfo[]>();

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/video',
        params: { id: videoId },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST,
        }
      };

      const { data } = await axios.request(options);
      setVideoInfo(data);
    }

    const fetchRelatedVideos = async () => {
      const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/related',
        params: { id: videoId },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST,
        }
      };

      const { data } = await axios.request(options);
      setRelatedVideos(data.data);
    };

    fetchVideoInfo();
    // fetchRelatedVideos();
  }, [videoId]);
  
  return (
    <div className={style.pageWrap}>
      <div className={style.videoBlock}>
        <YouTube
          className={style.video}
          videoId={videoId}
        />

        <div className={style.videoTitle}>{videoInfo?.title}</div>
      </div>

      <div className={style.relatedVideos}>
        
      </div>
    </div>
  );
}

export { VideoPage };