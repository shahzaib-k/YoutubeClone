import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';


const Videos = ({ videos, direction , height }) => {

    if(!videos?.length)  return <Loader/>

    return (
        <>
            <section className={` pt-4 pl-2 ${ direction }  gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                {videos.map((item, index) => (
                    <div key={index}>
                        {item.id.videoId && <VideoCard video={item} height={height} />}
                        {/* {item.snippet.channelId && <ChannelCard channelDetail={item} />} */}
                    </div>
                ))}
            </section>
        </>
    );
}

export default Videos;

