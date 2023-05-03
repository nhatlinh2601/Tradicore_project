import React from 'react';
import Storycard from '../storycard/Storycard';
import { Users } from '../../data';
import './story.scss';

const Story = () => {
    return (
        <div className="stories">
            <div className="storyCard">
                <div className="overlay"></div>
                <img src="./assets/images/img-social/user.jpg" alt="" className="storyProfile" />
                <img src="./assets/images/img-social/user.jpg" alt="" className="storybackground" />
                <img src="./assets/images/img-social/add-icon.jpg" alt="" className="storyadd" />
                <span className="text">Amber</span>
            </div>

            {Users.map((u) => (
                <Storycard key={u.id} user={u} />
            ))}
        </div>
    );
};

export default Story;
