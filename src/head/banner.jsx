import React from 'react';
import banner_img from '../assets/banner-main.png'
import bg from '../assets/bg-shadow.png'
const Banner = ({addBalance}) => {
    return (
        <div>
            <div className='grid gap-5 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg})` }}>
                <img src={banner_img} alt="" />
                <h3>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className='btn bg-amber-400' onClick={addBalance}>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;