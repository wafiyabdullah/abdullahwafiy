import React from 'react';
import OpeningWord from './OpeningWord';

const Card = ({item}) => {
    return (
        <div className="bg-white dark:bg-black rounded-lg shadow-md p-3 border dark:border-slate-800">
            <div className=''>
                <OpeningWord/>
            </div>
        </div>
    );
};

export default Card;
