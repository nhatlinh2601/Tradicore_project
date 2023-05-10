import React, { useContext } from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import './sidebar.scss';
import MenuLink from '../menuLink/MenuLink';
import Friends from '../friends/Friends';
import { Users } from '../../data';
import { DarkModeContext } from './../../context/darkModeContext';
import Login from '~/pages/Login';

const Sidebar = () => {
    function logout() {
        <>
            <Login />
        </>;
    }
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <MenuLink Icon={<RssFeedIcon />} text="Feed"></MenuLink>
                <MenuLink Icon={<ChatIcon />} text="Chats"></MenuLink>
                <MenuLink Icon={<VideocamIcon />} text="Videos"></MenuLink>
                <MenuLink Icon={<GroupsIcon />} text="Friends"></MenuLink>
                <MenuLink Icon={<EventIcon />} text="Events"></MenuLink>
                <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout"></MenuLink>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <Friends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
