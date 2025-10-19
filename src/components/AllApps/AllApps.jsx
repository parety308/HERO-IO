import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigation, useRevalidator } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';
import AppNotFound from '../AppNotFound/AppNotFound';
import {  BeatLoader} from 'react-spinners';
const AllApps = () => {
    const trendindApps = useLoaderData();
    const [search, SetSearch] = useState('');
    const { revalidate } = useRevalidator();
    const location = useLocation();
    const navigation = useNavigation();
    useEffect(() => {
        revalidate();
    }, [location])
    const handleSearch = (e) => {
        const val = (e.target.value).toLowerCase();
        SetSearch(val);
    }
    const filterApps = trendindApps.filter(app => app.title.toLowerCase().includes(search));
    if (navigation.state === "loading") {
        return (
            <div>
                <div className="flex justify-center items-center min-h-screen">
                    <BeatLoader color="red" size={50} />
                </div>
            </div>

        )
    }
    return (
        <div>
            <div className='flex justify-between items-center mt-4 mx-6'>
                <h1 className='text-xl font-semibold'>{search ? `App Found: ${filterApps.length}` : `Total Apps: ${trendindApps.length}`}</h1>
                <input onChange={handleSearch} className='bg-white border border-gray-400 p-1 rounded-md' type="text" placeholder='Search App...' />
            </div>
            <div className={filterApps.length === 0 && search ? 'flex flex-col justify-center items-center' : 'grid lg:grid-cols-4 md:grid-cols-2 lg:w-full gap-4 p-6 auto'} >
                {filterApps.length === 0 && search ? (<AppNotFound></AppNotFound>) :
                    ((search ? filterApps : trendindApps).map(tapp => <TrendingApp tapp={tapp} key={tapp.id}></TrendingApp>))
                }
            </div>
        </div>
    );
};

export default AllApps;