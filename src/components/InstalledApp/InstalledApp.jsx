import React from 'react';
import dwnIcon from '../../assets/icon-downloads.png'
import ratIcon from '../../assets/icon-ratings.png'
const InstalledApp = ({ app ,handleRemove}) => {
    const {id, title, downloads, ratingAvg, image, size } = app;
    return (
        <div className='mb-4   '>
            <div className='border border-gray-300 flex justify-between items-center shadow-md rounded-xl p-2'>
                <div className='flex  items-center'>
                    <img className='w-30 shadow-sm mr-5 rounded-xl' src={image} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold'>{title}</h1>
                        <div className='flex gap-1'>
                            <img className='w-6 h-6 ' src={dwnIcon} alt="" />
                            <p>{downloads / 1000000}M</p>
                            <img className='w-6 h-6 ml-2' src={ratIcon} alt="" />
                            <p>{ratingAvg}</p>
                            <p className='ml-2'>{size}MB</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=>handleRemove(id)} className='btn bg-[#00D390] text-xl font-semibold'>Unstall</button>
            </div>
            <div>
            </div>
        </div>
    );
};

export default InstalledApp;