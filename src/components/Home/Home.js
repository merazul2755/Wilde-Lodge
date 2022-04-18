import React from 'react';
import image from '../../Image/Wilde-Lodge-Home-10.jpg'

const Home = () => {
    return (
        <div>
            <div className=''>
                <img className='w-full h-screen' src={image} alt="" />
            </div>

            <div>
                <h1 className='text-4xl font-bold text-center mt-14 mb-14'>My Services</h1>
            </div>
        </div>
    );
};

export default Home;