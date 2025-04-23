import React from 'react';
import banner_img from '../assets/banner-main.png'
import bg from '../assets/bg-shadow.png'
const Banner = ({addBalance}) => {
    return (
        <div>
            <div className=' max-w-screen-xl w-full  bg-black bg-cover bg-no-repeat grid place-items-center text-center  ' style={{ backgroundImage: `url(${bg})` }}>
                <img className='w-60 h-48 mt-16' src={banner_img} alt="" />
                <h3 className='mt-6 font-extrabold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='mt-4 font-semibold text-2xl text-slate-400'>Beyond Boundaries Beyond Limits</p>
                <div className='mb-16 w-48 h-16 border-2 rounded-2xl flex justify-center items-center'>
                <button className='w-44 h-12 rounded-2xl bg-lime-300 hover:bg-lime-400 hover:shadow-xl transition-all' onClick={addBalance}>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;