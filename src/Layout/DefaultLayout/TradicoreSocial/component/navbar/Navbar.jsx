import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import user from 'src/assets/images/img-social/user.jpg';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const Timeline = () => {
        const d = new Date();
        const timeElement = document.getElementById('time');
        if (timeElement) {
            timeElement.innerHTML = d.toLocaleTimeString();
        }
    };

    setInterval(Timeline, 1000);
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">TRADICORE</span>
                </Link>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input type="text" placeholder="Search for friends post or video" className="searchInput" />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">
                        <span id="time"></span>
                    </span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <PersonIcon />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <ChatBubbleIcon />
                        <span className="navbarIconBadge">10</span>
                    </div>
                    <div className="navbarIconItem">
                        <NotificationsIcon />
                        <span className="navbarIconBadge">7</span>
                    </div>
                </div>
                <Link to="/profile/userId">
                    <img src={user} alt="" className="navbarImg" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
