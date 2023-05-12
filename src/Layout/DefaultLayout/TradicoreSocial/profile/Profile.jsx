import React from 'react';
import Navbar from '../component/navbar/Navbar';
import Sidebar from '../component/sidebar/Sidebar';
import './profile.scss';
import Feed from '../component/feed/Feed';
import Rightbar from '../component/rightbar/Rightbar';

const Profile = () => {
    return (
        <div className="profile">
            <Navbar />
            <div className="profileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="/assets/images/img-social/ProfileCover/profilecover.png"
                                alt=""
                                className="profileCoverImg"
                            />
                            <img src="/assets/person/user.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Amber Logan</h4>
                            <span className="profileInfoDesc">Hi Friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
