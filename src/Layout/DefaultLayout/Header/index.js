import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload, faEllipsisVertical, faEarth, faGear, faMagic, faRightToBracket, faSearch, faSign } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { isUser } from '../Login';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.scss'


function Header() {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const handleLinkClick = () => {
        setActiveItem('');
    };

    const handleButtonClick = () => {
        setIsBoxOpen(!isBoxOpen);
    };

    const [isBoxOpen, setIsBoxOpen] = useState(false);

    return (
        <header>
            <div className='wrap-menu'>
                <div className='container'>
                    <div className='wrap-menu_content'>
                        <div className='menu-content_left'>
                            <div className='menu-logo'>
                                <button onClick={() => window.scrollTo(0, 0)} className='menu-logo_icon'>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faEarth} />
                                    </Link>
                                </button>
                                <li onClick={() => window.scrollTo(0, 0)} className='menu-logo_title'>
                                    <Link to="/">TRADICORE</Link>
                                </li>
                            </div>

                            <div className="menu_list d-none d-xl-flex">
                                <li className={`menu_item ${activeItem === 'volunteering' ? 'active' : ''}`} onClick={() => handleItemClick('volunteering')}>
                                    <Link to="/volunteering" onClick={() => handleItemClick('volunteering')}>
                                        Hoạt động tình nguyện
                                    </Link>
                                </li>
                                <li className={`menu_item ${activeItem === 'news' ? 'active' : ''}`} onClick={() => handleItemClick('volunteering')}>
                                    <Link to="/news" onClick={() => handleItemClick('news')}>
                                        Tin tức
                                    </Link>
                                </li>
                                <li className={`menu_item ${activeItem === 'tradicoreSocial' ? 'active' : ''}`} onClick={() => handleItemClick('volunteering')}>
                                    <Link to="/tradicoreSocial" onClick={() => handleItemClick('tradicoreSocial')}>
                                        Mạng xã hội
                                    </Link>
                                </li>
                            </div>
                        </div>

                        <div className='menu-actions'>
                            <div className='menu-btns d-none d-md-block'>
                                <Button
                                    className='menu-btn'
                                    text
                                    to={"/login"}
                                    leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                                >
                                    Đăng nhập
                                </Button>
                                <Button
                                    className='menu-btn'
                                    text
                                    to={"/register"}
                                    leftIcon={<FontAwesomeIcon icon={faDownload} />}
                                >
                                    Đăng ký
                                </Button>
                            </div>

                            <button className="menu-menu d-xl-none" onClick={handleButtonClick}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <button className='menu-icon d-none d-lg-block '>
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isBoxOpen && (
                <div className='menu-mobile-ipad d-xl-none'>


                    <div className='container'>

                        <ul className='main-menu'>
                            <li>
                                <Link to='/volunteering' onClick={handleLinkClick}>
                                    Volunteering
                                </Link>
                            </li>
                            <li>
                                <Link to='/news' onClick={handleLinkClick}>
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link to='/tradicoreSocial' onClick={handleLinkClick}>
                                    TRADICORE Social
                                </Link>
                            </li>
                            <li>
                                <Link to='/tours' onClick={handleLinkClick}>
                                    Tours
                                </Link>
                            </li>
                        </ul>
                        <ul className='main-menu d-block d-sm-none'>
                            <li>
                                <Link to='/login' onClick={handleLinkClick}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register' onClick={handleLinkClick}>
                                    Register
                                </Link>
                            </li>
                            <li>
                                Setting
                            </li>

                        </ul>
                    </div>
                </div>
            )}

        </header>




    )




}



export default Header;
