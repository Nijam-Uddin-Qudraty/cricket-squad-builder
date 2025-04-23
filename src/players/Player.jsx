import React from 'react';
import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
const Player = ({player,handleSelect}) => {
    const {name,country, role, battingStyle, bowlingStyle,price,image} = player;
    return (
        // outer div 
        <div className='mt-10 p-6 border-2 rounded-2xl border-slate-100 max-w-[424px] max-h-[528px]'>
            <img className='w-[376px] h-[240px]' src={image} alt="" />
            <div>
                {/* player name and icon  */}
                <div className='flex gap-4 mt-6'>
                    <div><FaUser></FaUser></div>
                    <h3 className='font-extrabold text-xl'>{name}</h3>
                </div>
                {/* country and role  */}
                <div className=' flex mb-auto justify-between text-slate-500 mt-4'>
                    <div className='flex gap-4' >
                        <div><FaFlag></FaFlag> </div>
                        <p>{country}</p>
                    </div>
                    <button className='w-32 h-9 rounded-lg bg-slate-100 text-black'>{role}</button>
                </div>
                <p className='font-semibold mt-4' >{role == 'Bowler' ? bowlingStyle : battingStyle}</p>
                <div className='flex justify-between mt-3'>
                <p className='font-semibold'>Price : {price}$</p>
                    <button className='bg-lime-300 rounded-xl w-40 h-10 px-2 text-center' onClick={() => handleSelect(player)}>Choose Player</button>
                    </div>
            </div>
        </div>
    );
};
Player.propTypes={
    player: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired

}

export default Player;