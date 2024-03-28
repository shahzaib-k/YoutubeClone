import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'



const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault()

    if (searchTerm) {
     navigate(`/search/${searchTerm}`)
 
     setSearchTerm('')
   }

  }

  return (
    <>
     <section>

    <form onSubmit={handleSubmit} className='flex'>
        <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type='text' placeholder='Search' className='bg-black border-l border-t 
        border-b border-gray-600  px-2 h-9 pb-1 rounded-l-full outline-none text-white w-40 sm:w-60 md:w-96 lg:w-[420px] xl:w-[500px] '
        />
        <span title='Search' >
        <button className='w-10 bg-gray-800 border-r border-t border-l border-b border-gray-600 h-9 mr-4 rounded-r-full ' >
        <Search className='text-gray-400' /></button>
        </span>
    </form>

     </section>
    </>
  )
}

export default SearchBar
