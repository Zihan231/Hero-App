import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppDetails from './AppDetails';
import NoApps from '../../Components/NoApp/NoApps';

const Details = () => {
    const { appId } = useParams(); // this is always a string
    const data = useLoaderData();

    // Find app by comparing string
    const singleApp = data.find(a => String(a.id) === appId);

    return (
        <div>
            {singleApp ? <AppDetails /> : <NoApps />}
        </div>
    );
};

export default Details;
