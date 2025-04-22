import React from 'react';
import PropTypes from 'prop-types';
const Player = ({player,handleSelect}) => {
    const {name,country, role, battingStyle, bowlingStyle,price,image} = player;
    return (
        <div className='mt-10 border-4'>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <div>
                    <p>{country}</p>
                    <p>{role}</p>
                </div>
                <p>{role == 'Bowler' ?  bowlingStyle  : battingStyle }</p>
                <p>{price}</p>
                <button className='btn bg-amber-400' onClick={()=>handleSelect(player)}>Select</button>
            </div>
        </div>
    );
};
Player.propTypes={
    player: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired

}

export default Player;