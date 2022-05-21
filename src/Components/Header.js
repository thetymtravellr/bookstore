import React from 'react';
import SearchBar from './SearchBar';
import Time from './Time';

const Header = () => {
    return (
        <header className='w-full flex items-center border-2'>
            <h1>Dashboard</h1>
            <div className='flex items-center'>
            <SearchBar></SearchBar>
            <Time></Time>
            </div>
        </header>
    );
};

export default Header;