import React from 'react'
import './Volunteering.scss'
import { useState } from 'react'
import Slider from 'react-slick'
import hd1 from '~/assets/images/img-volunteer/hoatDong/hd6.jpg'
import hd2 from '~/assets/images/img-volunteer/hoatDong/hd5.jpg'
import hd3 from '~/assets/images/img-volunteer/hoatDong/hd3.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function VolunteerAction() {

    const images1 = [hd1, hd1, hd1]
    const images2 = [hd2, hd2, hd2]
    const images3 = [hd3, hd3, hd3]

    const settings1 = {
        customPaging: function (i) {
            return (
                <a>
                    <img className='img-link' src={images1[i]} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const settings2 = {
        customPaging: function (i) {
            return (
                <a>
                    <img className='img-link' src={images2[i]} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const settings3 = {
        customPaging: function (i) {
            return (
                <a>
                    <img className='img-link' src={images3[i]} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };



    const data = [
        {
            name: 'Hành trình địa chỉ đỏ',
            description: 'Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh',
            place: 'Ha Noi',
            time: '27/4 - 24/5',
            image: hd1,
            list: images1,
            custom: settings1,
        },
        {
            name: 'Hành trình địa chỉ đỏ',
            description: 'Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh',
            place: 'Ha Noi',
            time: '27/4 - 24/5',
            image: hd2,
            list: images2,
            custom: settings2,
        },
        {
            name: 'Hành trình địa chỉ đỏ',
            description: 'Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh',
            place: 'Ha Noi',
            time: '27/4 - 24/5',
            image: hd3,
            list: images3,
            custom: settings3,
        },
    ]

    const [selectedImageIndex, setSelectedImageIndex] = useState(1);
    const [isShowing, setIsShowing] = useState(false);







    return (
        <div className='volun_curren'>
            <div className='container'>

                <h1 className='curren_title'>HOẠT ĐỘNG SẮP TỚI</h1>
                <div className='row'>


                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='col-12 col-md-12 col-xl-4'>
                                    <div onClick={() => {
                                        setIsShowing(true);
                                        setSelectedImageIndex(index)
                                    }} className='box_event'>
                                        <div className='box_image'>
                                            <img className='' src={item.image} alt="" />
                                        </div>
                                        <div style={{ padding: '24px', background: 'white' }}>
                                            <h2>{item.name}</h2>
                                            <p>{item.description}</p>

                                            <div style={{ justifyContent: 'space-between' }} className='d-flex'>
                                                <p className='place'>{item.place}</p>
                                                <p className='time'>{item.time}</p>
                                            </div>
                                            <Link to='/volunteering/form'> <button>Tham gia</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            {
                isShowing &&
                <div className='action_modal'>
                    <div className='action_overlay'></div>
                    <div className='container'>
                        <div className='action_md-content'>
                            <button onClick={() => {
                                setIsShowing(false)
                            }} className='icon_close'>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <Slider {...data[selectedImageIndex].custom}>
                                {data[selectedImageIndex].list.map((image, index) => (
                                    <div className='slider_image'>
                                        <div className='div_img' key={index}>
                                            <img className='img-link' src={image} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default VolunteerAction