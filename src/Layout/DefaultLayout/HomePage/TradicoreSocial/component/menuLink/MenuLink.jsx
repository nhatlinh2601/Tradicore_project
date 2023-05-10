import React from 'react';
import './menuLink.scss';
import { Users } from '../../data';

const MenuLink = ({ Icon, text }) => {
    return (
        <div className="menuLink">
            {Icon}
            <span className="menuLinkText">{text}</span>
            <span className="menuLinkTextName">{text === 'Logout' && '(hoaian_18)'} </span>
        </div>
    );
};

export default MenuLink;
