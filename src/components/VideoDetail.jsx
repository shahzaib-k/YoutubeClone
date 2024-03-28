import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';


import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Navbar from './Navbar';
import Loader from './Loader';
import { demoVideoUrl } from '../utils/constants';

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetails?.snippet) return <Loader />;

  console.log(videoDetails);

  return (
    <>
      <section>
        <div className='min-w-full min-h-screen bg-black'>
          <Navbar />
          <div className='flex flex-col md:flex-row w-full pt-20 h-full  px-4 rounded'>
            
            <div className='flex flex-col w-full h-full lg:pl-10 md:mr-4'>
              
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}` }
                className={`react-player `}
                controls
              width='auto'
              height= '675px'
                
                style={{
                  height : '675px',
                  width: '100vw',     
                  padding: "0 0 0 10px" ,
                  borderRadius: "10px"

                }}
               
              />
              <h1 className='text-white mt-4 ml-3  text-lg'>{videoDetails.snippet.title}</h1>
              <h1 className='text-gray-400 mt-1 ml-3  text-lg'>{videoDetails?.snippet?.channelTitle} <CheckCircle sx={{ fontSize: 'small' }}/></h1>

            </div>
            

            <div>
            <h1 className='text-white text-lg ml-3 sm:text-2xl pt-4 md:pt-0' >Suggested <span className='text-red-600'>Videos</span></h1>
            <Videos videos={videos} direction="flex flex-col" height='h-[320px] 2xl:h-[340px] ' />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VideoDetail;
