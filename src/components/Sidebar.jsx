import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { categories } from '../utils/constants';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
    const location = useLocation();
    const [click, setClick] = useState(false);

    const handleActive = (value) => {
        setSelectedCategory(value)
    }

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
     <>
      <section className=''>
        <span onClick={() => setClick(true)} className={` ${click ? 'hidden' : 'fixed'} text-2xl md:hidden fixed top-2 text-white left-2 cursor-pointer`}>
            <MenuIcon />
        </span>
        <div className={`fixed  ${click ? 'w-52 px-3' : 'w-0'} mt-14 z-10 bg-black transition-all duration-100  
            ease-in shadow-2xl h-screen overflow-y-auto pt-10 flex-1 border-r border-gray-900 md:w-56 md:p-3 xl:w-60`}>
              <ul className="">
                <span onClick={() => setClick(false)} className='absolute top-2 left-44 text-white font-bold md:hidden cursor-pointer' >
                    <CloseIcon />
                </span>
                    {categories.map((category) => (  

                        <button onClick={() => { handleActive(category.name); setClick(false)}} className={`${category.name === selectedCategory ? 'bg-gray-700' : 'bg-black' }
                         flex items-center w-48 h-12 rounded-2xl hover:bg-gray-700 pl-2 `}
                        key={category.name} >
                            <span className={`text-white mr-4`} >{category.icon}</span>
                            <span className={`text-white`} >{category.name}</span>
                        </button>

                        ))}
                    </ul>
                </div>
            </section>
        </>
    );

};

export default Sidebar;

