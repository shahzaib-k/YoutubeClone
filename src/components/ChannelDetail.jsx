import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <>

      <section className='bg-black pl-2' >
      <h1 className='text-white'> </h1>
        <div>
          <ChannelCard channelDetail={channelDetail} />
        </div>
        <div>
          <Videos videos={videos} direction='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' />
        </div>
      </section>
    </>
  )
}

export default ChannelDetail
