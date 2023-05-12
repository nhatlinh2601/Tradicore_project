import React from 'react';
import Feed from '~/Layout/DefaultLayout/TradicoreSocial/component/feed/Feed';
import Sidebar from '~/Layout/DefaultLayout/TradicoreSocial/component/sidebar/Sidebar';
import Rightbar from '~/Layout/DefaultLayout/TradicoreSocial/component/rightbar/Rightbar';
import Navbar from '~/Layout/DefaultLayout/TradicoreSocial/component/navbar/Navbar';
import './homeSocial.scss';

const HomeSocial = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    );
};

export default HomeSocial;
