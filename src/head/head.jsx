import React from 'react';
import logo from '../assets/logo.png'
import Banner from './banner'
const Head = ({addBalance,balance}) => {
    return (
        <div>
            <nav>
            <div className='flex justify-between'>
                <img src={logo} className='' alt="" />
                <div className='flex justify-between gap-5 m-auto'>
                <ul className='list-none flex gap-5 '>
                <li>Home</li>
                <li>Fixture</li>
                <li>Schedule</li>
                <li>Teams</li>
                </ul>
                
                <div>
                    <p>{balance} coins</p>
                </div>
            </div>
            </div>
            </nav>
            <Banner addBalance={addBalance} balance ={balance}></Banner>
            
        </div>
    );
};

export default Head;