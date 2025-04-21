import React, { useState } from 'react';
import Player from './Player';

const Players = ({ players }) => {
    const [available, setAvailable] = useState(true)
    const handleAvailable = () => {
        setAvailable(prev => !prev)
    }
    console.log(available);
    return (
        <div className='mt-10 flex justify-between'>
            <h3>Available Players</h3>
            <div className='flex gap-6'>
                <button className='btn bg-amber-300' onClick={!available && handleAvailable }>Available</button>
                <button onClick={available && handleAvailable }>Selected</button>
            </div>
            {available && 
                players.map(player => <Player player={player}></Player>)
             }
        </div>
        
    );
};

export default Players;