import React from 'react';

import HomeSocial from '~/Layout/DefaultLayout/HomePage/TradicoreSocial/homeSocial/HomeSocial';
import { DarkModeContextProvider } from '~/Layout/DefaultLayout/HomePage/TradicoreSocial/context/darkModeContext';

const TradicoreSocial = () => {
    return (
        <>
            <React.StrictMode>
                <DarkModeContextProvider>
                    <HomeSocial />
                </DarkModeContextProvider>
            </React.StrictMode>
            ,
        </>
    );
};

export default TradicoreSocial;
