import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';
import dwnIcon from '../../assets/icon-downloads.png'
import ratIcon from '../../assets/icon-ratings.png'
import revIcon from '../../assets/icon-review.png'
import RatingsChart from '../RatingsChart/RatingsChart';
import { addToLC, getToLC } from '../AddToLC/AddToLC';
import { toast } from 'react-toastify';
const AppDetails = () => {
    const { appId } = useParams();
    const allApps = useLoaderData();
    const app = allApps.find(ap => ap.id === parseInt(appId));
    const { title, downloads, ratingAvg, image, companyName, reviews, id, ratings, size, description } = app;
    const [isInstalling, setIsInstalling] = useState(false);
    useEffect(() => {
        const installedApps = getToLC();
        if (installedApps.includes(id)) {
            setIsInstalling(true);
        }
    }, [id]);

    const handleInstalation = () => {
        toast('App Is Installing')
        addToLC(id);
        setIsInstalling(true);
    }
    return (
        <div className='mx-8 auto'>
            <div className='lg:flex justify-start items-center  rounded-2xl'>
                <div>
                    <img className='shadow-sm my-6 mr-5 rounded-xl w-50'
                        src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-4xl'>{title}</h1>
                        <p>Developed by {companyName}</p>
                        <hr className='mt-2 border-gray-400'
                        />
                    </div>

                    <div className='flex items-center gap-12 mt-5'>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <img src={dwnIcon} alt="" />
                            <p>Downloads</p>
                            <h1 className='text-3xl font-bold'>{downloads / 1000000}M</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <img src={ratIcon} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='text-3xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <img src={revIcon} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='text-3xl font-bold'>{reviews / 1000}K</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-8 lg:my-5 border-gray-400' />
            <RatingsChart ratings={ratings}></RatingsChart>
            <hr className='my-8 lg:my-5 border-gray-400' />
            <button disabled={isInstalling} onClick={() => { handleInstalation() }} className='btn bg-[#00D390] text-xl font-semibold'> {isInstalling ? "Installed" : `Install Now (${size} MB)`}</button>
            <div className='my-5'>
                <h1 className='text-xl font-semibold'>Description </h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;