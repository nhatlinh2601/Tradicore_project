import React from 'react';

import { DarkModeContextProvider } from '~/Layout/DefaultLayout/TradicoreSocial/context/darkModeContext';
import HomeSocial from '~/Layout/DefaultLayout/TradicoreSocial/homeSocial/HomeSocial';

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
