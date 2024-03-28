import React from 'react'
import { demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

const ChannelCard = ({channelDetail}) => {

  console.log(channelDetail);

  return (
    <>
      <section className=' pt-8 ml-4'>

        <Link to={`/channel/${channelDetail?.id?.channelId}`} className='flex flex-row items-center md:pl-20  ' >
        <div className="pr-4" >
          <img src={channelDetail?.snippet?.thumbnails?.high?.url  } className='w-20 h-20 md:w-40 md:h-40 lg:w-48 lg:h-48  rounded-full' />
        </div>
 
      <section>
        <div>
        <span title={channelDetail?.snippet?.title}  >
        <h1  className='text-white flex flex-row '>{channelDetail?.snippet?.title} <span className='ml-1'><CheckCircle sx={{ fontSize: 'small' }}/></span>  </h1>
        </span>
        </div>
       
       <div>
       {channelDetail?.statistics?.subscriberCount && (
          <h1 className='text-gray-400' >{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</h1>
        )}
       </div>
       </section>

        </Link>
        <div className="border-t border-gray-500 mt-6 mr-3 "></div>
      </section> 
    </>
  )
}

export default ChannelCard
