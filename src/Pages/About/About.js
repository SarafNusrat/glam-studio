import React from 'react';
import img1 from '../../images/pic.jpg';

const About = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl text-center mb-2 mt-5 text-orange-600'>ABOUT ME</h2>
            <div className='flex ml-52'>
                <div>
                    <img className='w-3/4 ms-5 ps-5' src={img1} alt="" srcset="" />
                </div>
                <div>
                    <p className='mt-5 me-10 mr-52 justify-around text-justify'>As we started 2022, I dreamt of becoming a web developer this year. I have been dreaming this since long, but could never achieve it because of lack of determination. But, this time, with the help of programming hero, I feel I'm very close to my goal. I eagerly look forward to landing a web developmnt job at the end of this year.I will give my 100% to make this happen.</p><br></br>
                    <p>It's high time!</p>
                </div>
            </div>
        </div>
    );
};

export default About;