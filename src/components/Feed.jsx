import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Loader from './Loader'


const Feed = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('New')
  const  [videos, setVideos] = useState([])

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items) )
  }, [selectedCategory])

  return (
    <>
    <section className=' min-w-full h-full bg-black ' >

     <Navbar/>  
  
     <Sidebar selectedCategory={selectedCategory} 
     setSelectedCategory={setSelectedCategory} />

      <div className='md:ml-64 ml-4 pt-14  md:pl-1' >
        <h1 className='text-white text-lg md:text-2xl' > {selectedCategory} <span className='text-red-500' >Videos</span> </h1>

        {videos ? <Videos videos={videos} direction='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' /> :  <Loader />}


      </div>
    </section>       
    </>
  )
}

export default Feed
