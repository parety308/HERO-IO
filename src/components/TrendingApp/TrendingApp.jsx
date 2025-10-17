import React from 'react';
import dwnIcon from '../../assets/icon-downloads.png'
import ratIcon from '../../assets/icon-ratings.png'
const TrendingApp = ({tapp}) => {
    const {title,downloads,ratingAvg,image}=tapp;
    return (
        <div className="card bg-base-100  shadow-sm  flex flex-col justify-between p-5">
            <figure>
                <img 
                    src={image}
                    alt="Apps"
                    className="rounded-xl w-96 " />
            </figure>
            <div className=''>
                <h2 className="card-title my-2 ">{title}</h2>
                <div className="flex justify-between items-center mb-2">
                    <button className="btn"><img className="w-5" src={dwnIcon} alt="" /> {downloads/100000}M</button>
                    <button className="btn"><img className="w-5" src={ratIcon} alt="" /> {ratingAvg}</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApp;