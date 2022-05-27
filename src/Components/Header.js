import React from 'react';
import Disclosure from './Disclosure';
import SearchBar from './SearchBar';
import Time from './Time';

const Header = () => {
    return (
        <header className='w-full flex items-center border-2 space-x-8'>
            <h1 className='w-fit text-3xl font-semibold text-primary'>Dashboard</h1>
            <div className='w-full flex items-center justify-end space-x-14'>
            <SearchBar></SearchBar>
            <Time></Time>
            <Disclosure></Disclosure>
            </div>
        </header>
    );
};

export default Header;