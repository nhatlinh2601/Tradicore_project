import './SliderImages.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useState } from 'react';
import nhaNhacCDHue from '~/assets/images/img-disanVH/nhaNhacCungDinhHue.jpg'
import vanHoaCongChieng from '~/assets/images/img-disanVH/KhongGianVHCongChieng.jpg'
import quanHoBN from '~/assets/images/img-disanVH/QuanHoBN.jpg'
import caTru from '~/assets/images/img-disanVH/CaTru.jpg'
import hoiGiong from '~/assets/images/img-disanVH/HoiGiong.jpg'
import hoiDenHung from '~/assets/images/img-disanVH/hoiDenHung.jpg'
import then from '~/assets/images/img-disanVH/then.jpg'
import xoeThai from '~/assets/images/img-disanVH/XoeThai.jpg'
import baiChoi from '~/assets/images/img-disanVH/BaiChoi.jpg'
import keoCo from '~/assets/images/img-disanVH/keoCo.jpg'
import danCa from '~/assets/images/img-disanVH/danCa.jpg'
import donCaTaiTu from '~/assets/images/img-disanVH/donCaTaiTu.jpg'
import tinNguong from '~/assets/images/img-disanVH/tinNguong.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import './HeartModal.scss'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function SliderImages() {

    const [isShowing, setIsShowing] = useState(false);
    const [isHearted, setIsHearted] = useState(false);
    const [index, setIndex] = useState(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,


    };

    const imagesSlider = [
        {
            image: nhaNhacCDHue,
            name1: "Nhã nhạc",
            name2: "Cung đình Huế",
            details: "Âm hưởng tao nhã cùng điệu thức cao sang, quý phái.",
            years: 'Huế - 31/1/2004'

        },
        {
            image: vanHoaCongChieng,
            name1: "Không gian văn hóa",
            name2: "Cồng chiêng",
            details: "Cồng chiêng Tây Nguyên - Kiệt tác văn hóa của nhân dân",
            years: '2005',

        },
        {
            image: hoiGiong,
            name1: "Đền Sóc, Phù Đổng",
            name2: "Hội Gióng",
            details: "Lên ba đang tuổi anh hài - Roi vàng ngựa sắt ra oai trận tiền",
            years: 'Đền Sóc - 2010',

        },
        {
            image: tinNguong,
            name1: "Tín ngưỡng thờ mẫu",
            name2: "Việt Nam",
            details: "Đạo Mẫu mang cho con người sống ở trên đời này ba điều: Phúc – Lộc – Thọ",
            years: '2016 - Đại diện cho nhân loại',

        },
        {
            image: donCaTaiTu,
            name1: "Đơn ca tài tử",
            name2: "Nam Bộ",
            details: " Khi vui có thể cùng bạn “nâng phím so dây” với bài Tây thi, Xuân tình sôi nổi, vui tươi;",
            years: '2013',

        },
        {
            image: danCa,
            name1: "Dân ca, ví, dặm",
            name2: "Nghệ Tĩnh",
            details: "Những nguồn mạch thanh trong, ấm nồng hơi thở nguồn cội nuôi dưỡng và nâng cánh tâm hồn",
            years: '2014 - Đại diện cho nhân loại',

        },
        {
            image: keoCo,
            name1: "Nghi lễ",
            name2: "Kéo co",
            details: "Kéo co Việt Nam - nét sinh hoạt văn hóa độc đáo",
            years: 'Đại diện cho nhân loại - 2015',

        },
        {
            image: hoiDenHung,
            name1: "Tín ngưỡng ",
            name2: "Thờ cúng Hùng Vương",
            details: "Cuộc hành hương trở về cội nguồn lịch sử.",
            years: 'Phú Thọ - 2012',

        },
        {
            image: caTru,
            name1: "Hát",
            name2: "Ca trù",
            details: '"Sống lại" ca trù trong phố cổ ',
            years: '2009 - Cần được bảo tồn khẩn cấp',

        },
        {
            image: then,
            name1: "Nghi lễ Then",
            name2: "Tày, Nùng và Thái",
            details: "Then vừa là một loại hình văn nghệ dân gian, vừa là một biểu hiện của tín ngưỡng dân gian",
            years: '2019',

        },
        {
            image: xoeThai,
            name1: "",
            name2: "Xòe Thái",
            details: "Tượng trưng cho cái đẹp, là dấu ấn văn hóa tộc người, và bản sắc văn hóa của người Thái vùng Tây Bắc Việt Nam.",
            years: 'Đại diện cho nhân loại - 2021',

        },
        {
            image: quanHoBN,
            name1: "Dân ca Quan họ",
            name2: "Bắc Ninh",
            details: "Dân ca quan họ Bắc Ninh: Những làn điệu làm say đắm lòng người",
            years: 'Đại diện cho nhân loại - 2009',

        },
        {
            image: baiChoi,
            name1: "Nghệ thuật",
            name2: "Bài Chòi",
            details: "“Bài chòi – một thể loại sân khấu âm nhạc độc đáo” - “Những âm thanh, âm nhạc và những không gian âm thanh” ",
            years: '2017',

        },

    ];



    return (
        <>
            <div className='slider-wrap'>

                <Slider {...settings}>
                    {
                        imagesSlider.map((item, index) => {
                            return (
                                <div key={index} className='slider_content'>
                                    <div className='contaier-fluid'>
                                        <div className='container'>
                                            <div className='slider_item'>
                                                <div className='row'>
                                                    <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                                                        <div className='left_item-content'>
                                                            <div className='left_item'>

                                                                <h1 className='prd_name1'>{item.name1}</h1>
                                                                <h1 className='prd_name2' >{item.name2}</h1>
                                                                <h3 className='prd_details'>{item.details}</h3>
                                                                <div className='prd_more'>

                                                                    <button onClick={() => {
                                                                        setIsShowing(true);
                                                                        setIndex(index)
                                                                    }} className='prd_icon'><FontAwesomeIcon icon={faHeart} /></button>
                                                                    <p className='prd_years'>{item.years}</p>
                                                                </div>
                                                                <Button className='menu-btn' large text to={"/news"} leftIcon={<FontAwesomeIcon icon={faStar} />}>
                                                                    SEE MORE
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-8 col-lg-8 col-sm-12 col-12'>
                                                        <div className='right_item'>
                                                            <h2 className='slogan'>TỰ HÀO BẢN SẮC - TỎA SÁNG TẦM VÓC</h2>
                                                            <div className='wrap-images'>
                                                                <img className='img-link' src={item.image} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider >
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
                                        <h3 className="modal__notify-product">{imagesSlider[index].name1} {imagesSlider[index].name2}</h3>
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
