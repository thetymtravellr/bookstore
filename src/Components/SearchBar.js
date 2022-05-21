import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const SearchBar = () => {
    return (
        <div className=' w-fit border-2 h-12 flex'>
            <input type="text" placeholder="Type here" className="input border-0 focus:outline-none input-ghost w-full max-w-xs h-full" />
            <button className='h-full w-12 grid place-content-center'>
                <SearchIcon className='w-6 '/>
            </button>
        </div>
    );
};

export default SearchBar;