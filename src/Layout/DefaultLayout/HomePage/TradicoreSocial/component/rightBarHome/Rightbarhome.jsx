import React from 'react';
import Online from '../online/Online';
import { Usersonline } from '../../data';
import './rightbarhome.scss';

const Rightbarhome = () => {
    return (
        <div className="rightbarhome">
            <span className="rightbarTitle">Online Friends</span>

            <ul className="rightbarFriendList">
                {Usersonline.map((u) => (
                    <Online key={u.id} onlineuser={u} />
                ))}
            </ul>

            <span className="rightbarTitle"> Chat</span>
        </div>
    );
};

export default Rightbarhome;
