import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'
import Loader from './Loader'


const SearchFeed = () => {
  
  const  [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items) )

  },[searchTerm])

  return (
    <>
    <section className='min-w-full h-full bg-black ' >

     <Navbar/>  
    
      <div className='md:ml-64 pt-14 pl-4 md:pl-1' >
        <h1 className='text-white text-lg md:text-2xl' > Search Results for <span className='text-red-500' >{searchTerm}</span> </h1>

       { videos? <Videos videos={videos}  /> : <Loader/> }
      </div>

    </section>     
      
    </>
  )
}

export default SearchFeed
