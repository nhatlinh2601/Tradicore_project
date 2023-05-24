import React from 'react'
import './Volunteering.scss'
import { useState } from 'react'
import Slider from 'react-slick'
import hd1 from '~/assets/images/img-volunteer/hoatDong/list1/1.jpg'
import hd2 from '~/assets/images/img-volunteer/hoatDong/list1/2.jpg'
import hd3 from '~/assets/images/img-volunteer/hoatDong/list1/3.jpg'
import hd4 from '~/assets/images/img-volunteer/hoatDong/list1/hd4.jpg'
import hd5 from '~/assets/images/img-volunteer/hoatDong/list1/5.jpg'
import hd6 from '~/assets/images/img-volunteer/hoatDong/list1/6.jpg'


import l1 from '~/assets/images/img-volunteer/hoatDong/list2/1.jpeg'
import l2 from '~/assets/images/img-volunteer/hoatDong/list2/2.jpeg'
import l3 from '~/assets/images/img-volunteer/hoatDong/list2/3.jpeg'
import l4 from '~/assets/images/img-volunteer/hoatDong/list2/4.jpeg'
import l5 from '~/assets/images/img-volunteer/hoatDong/list2/5.jpg'
import l6 from '~/assets/images/img-volunteer/hoatDong/list2/6.jpeg'

import i1 from '~/assets/images/img-volunteer/hoatDong/list3/1.jpg'
import i2 from '~/assets/images/img-volunteer/hoatDong/list3/2.jpg'
import i3 from '~/assets/images/img-volunteer/hoatDong/list3/3.jpg'
import i4 from '~/assets/images/img-volunteer/hoatDong/list3/4.jpg'
import i5 from '~/assets/images/img-volunteer/hoatDong/list3/5.jpg'


import langBan from '~/assets/images/img-volunteer/hoatDong/1.jpg'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function VolunteerAction() {

    const images1 = [hd1, hd2, hd3, hd4, hd5, hd6]
    const images2 = [l2, l3, l1, l4, l5, l6]
    const images3 = [i5, i2, i3, i4, i1]

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
            name: 'Chương trình "Về với làng bản" - Sapa, Lào Cai',
            description: 'Du lịch tình nguyện, trồng cây, chăm sóc nông trại, học văn hóa truyền thống, tham quan các làng bản và giúp đỡ những hoàn cảnh khó khăn.',
            place: 'Sapa, Lào Cai',
            time: 'T1/2',
            image: hd1,
            list: images1,
            custom: settings1,
        },
        {
            name: 'Tình nguyện viên bảo tồn di sản Đồng Văn - Hà Giang',
            description: 'Tập trung xây dựng lối kiến trúc truyền thống tại các làng văn hóa du lịch cộng đồng tại 4 huyện cao nguyên đá nhằm bảo tồn và phát triển',
            place: 'Đồng Văn',
            time: 'T10',
            image: i1,
            list: images3,
            custom: settings3,
        },
        {
            name: 'Trại hè tình nguyện Bản Cỏi - Phú Thọ',
            description: '“Đi tình nguyện để thấy mình trưởng thành hơn, đi tình nguyện để cảm nhận được sự ấm áp của tình đồng đội, và hơn hết, đi tình nguyện là để thêm yêu Tổ quốc mình hơn”.',
            place: 'Phú Thọ',
            time: '24/6 - 30/6',
            image: l1,
            list: images2,
            custom: settings2,
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