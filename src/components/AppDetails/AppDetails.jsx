import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';

const AppDetails = () => {
    const { appId } = useParams();
    const allApps = useLoaderData();
    const tpp = allApps.find(ap => ap.id === parseInt(appId));
    const { title, downloads, ratingAvg, image, id } = app;
    return (
        <div className='mx-8 auto'>
            <div>
                <div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default AppDetails;