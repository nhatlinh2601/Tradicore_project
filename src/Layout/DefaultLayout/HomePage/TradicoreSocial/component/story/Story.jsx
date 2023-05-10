import React from 'react';
import Storycard from '../storycard/Storycard';
import user from 'src/assets/images/img-social/user.jpg';
import add from 'src/assets/images/img-social/add-icon.jpg';
import { Users } from '../../data';
import './story.scss';

const Story = () => {
    return (
        <div className="stories">
            <div className="storyCard">
                <div className="overlay"></div>
                <img src={user} alt="" className="storyProfile" />
                <img src={user} alt="" className="storybackground" />
                <img src={add} alt="" className="storyadd" />
                <span className="text">Amber</span>
            </div>

            {Users.map((u) => (
                <Storycard key={u.id} user={u} />
            ))}
        </div>
    );
};

export default Story;
