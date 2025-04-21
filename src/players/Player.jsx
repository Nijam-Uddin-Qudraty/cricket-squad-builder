import React from 'react';

const Player = ({player}) => {
    console.log("Player connected");
    const {name,country, role, battingStyle, bowlingStyle,price,image} = player;
    return (
        <div className='mt-10'>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <div>
                    <p>{country}</p>
                    <p>{role}</p>
                </div>
                <p>{role == 'Bowler' ?  bowlingStyle  : battingStyle }</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Player;