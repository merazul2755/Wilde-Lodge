import React from 'react';
import image from '../../Image/sowad.jpg'

const About = () => {
    return (
        <div>
            <div className=' w-1/3 mt-8 m-auto drop-shadow-lg'>
                <img className=' rounded-md' src={image} alt="" />
                <h1 className='font-bold text-3xl text-center mt-5'>Merazul Ehsan Sowad</h1>
                <p className='text-justify mt-3 mb-'>Currently i'm studing at Department of <strong>Software Engineering.</strong> I'm leaning MARN STACK. Now i'm focusing on it so hard. Daily I spend time 5/6 hour for practicing. My goal is to be a FULL STACK Wed Developer.</p>
            </div>
        </div>
    );
};

export default About;