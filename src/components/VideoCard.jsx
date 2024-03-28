import React from 'react';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video, height }) => { 

    const { id: { videoId }, snippet } = video;

    return (
        <>
            <section className='flex flex-col w-full pb-2 sm:flex-row'>

                <div className={`flex flex-col ${height}  pr-4`}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl } className='w-full sm:h-auto'  />
                    </Link>
                    <div>
                        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                            <h1 className='text-white'>{snippet?.title.slice(0, 60) || demoVideoUrl.slice(0, 60)} </h1>
                        </Link>
                    </div>
                    <div>
                        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                            <h1 className='text-gray-400 '>{snippet?.channelTitle || demoChannelTitle} <CheckCircle sx={{ fontSize: 'small' }} /> </h1>
                        </Link>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default VideoCard;
