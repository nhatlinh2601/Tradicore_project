import './SliderImages.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useState, useEffect } from 'react';
import vanHoaCongChieng from '~/assets/images/img-disanVH/KhongGianVHCongChieng.jpg'
import caTru from '~/assets/images/img-disanVH/CaTru.jpg'
import hoiGiong from '~/assets/images/img-disanVH/HoiGiong.jpg'
import then from '~/assets/images/img-disanVH/then.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './HeartModal.scss'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function SliderImages() {

    const [isShowing, setIsShowing] = useState(false);
    const [index, setIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showCaption, setShowCaption] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showButton, setShowButton] = useState(false);



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
            setShowCaption(false);
            setShowDetails(false);
            setShowButton(false);
        },
        afterChange: () => {
            setShowCaption(true);
            setTimeout(() => {
                setShowDetails(true);
                setTimeout(() => {
                    setShowButton(true);
                }, 600);
            }, 800);
        },
    };


    useEffect(() => {
        setShowCaption(true);
        setTimeout(() => {
            setShowDetails(true);
            setTimeout(() => {
                setShowButton(true);
            }, 600);
        }, 800);


    }, []);

    const imagesSlider = [

        {
            image: vanHoaCongChieng,
            name: "Không gian văn hóa cồng chiêng",
            details: "Kiệt tác văn hóa của nhân dân. Thanh âm huyền bí giữa đại ngàn. Để linh hồn của núi mãi vang vọng",

        },
        {
            image: hoiGiong,
            name: "Di sản văn hóa Hội Gióng",
            details: "Lên ba đang tuổi anh hài - Roi vàng ngựa sắt ra oai trận tiền - Một phen khói lửa dẹp yên - Sóc Sơn nhẹ bước thần tiên lên trời.",


        },
        {
            image: caTru,
            name: "Nghệ thuật hát ca trù",
            details: 'Vẻ đẹp của âm thanh đã chuốt thành những chuỗi ngọc lung linh bởi những tâm hồn yêu tiếng hát, tiếng thơ, tiếng tơ, nhịp phách ca trù',

        },
        {
            image: then,
            name: "Nghi lễ Then",
            details: "Được ví là 'điệu hát thần tiên', điệu hát của “Trời” trong đời sống, văn hoá tín ngưỡng, tâm linh vùng cao phía Bắc",


        },

    ];



    return (
        <>
            <div className='slider-wrap'>

                <Slider {...settings}>
                    {imagesSlider.map((item, index) => (
                        <div key={item.name} className='wrapper_image'>
                            <img className='img-link' src={item.image} alt='' />
                            <div className='wrap_overlay'></div>
                            {showCaption && (
                                <div className='content_infor'>
                                    <h1 className={`prd_name ${showDetails ? 'show' : ''}`}>
                                        {item.name}
                                    </h1>
                                    <h3 className={`prd_details ${showDetails ? 'show' : ''}`}>
                                        {item.details}
                                    </h3>
                                    <div className={`prd_more ${showButton ? 'show' : ''}`}>
                                        <button
                                            onClick={() => {
                                                setIsShowing(true);
                                                setIndex(index);
                                            }}
                                            className='prd_icon'
                                        >
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                        <Link to={'/news'}>
                                            <button className={`menu-btn ${showButton ? 'show' : ''}`}> Xem thêm</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </Slider>
                {
                    isShowing && <div className="modal__heart">
                        <div className="modal__overlay"></div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='container'>
                            <div className="modal__heart-content">
                                <div className='modal__content'>
                                    <button className="modal__succes-icon">
                                        <FontAwesomeIcon style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)' }} icon={faCheck} />
                                    </button>
                                    <div style={{ marginTop: '40px' }} className="modal__notify">
                                        <h3 className="modal__notify-product">{imagesSlider[index].name} {imagesSlider[index].name2}</h3>
                                        <p>đã thêm vào danh mục yêu thích !</p>
                                    </div>
                                    <div className="modal__submit">
                                        <button onClick={() => {
                                            setIsShowing(false)
                                        }} className="modal__btn-submit">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>


        </>
    );


}

export default SliderImages;
