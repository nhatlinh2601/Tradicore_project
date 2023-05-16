import React from 'react'
import background from '~/assets/images/img-volunteer/bg.webp'
import banDo from '~/assets/images/img-volunteer/hoatDong/banDo.png'
import dongHanh from '~/assets/images/img-volunteer/hoatDong/dongHanh.jpg'
import VolunteerAction from './VolunteerAction'
import { Element } from 'react-scroll';
import './Volunteering.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { tinhThanh } from './data'




function Volunteering() {
    return (
        <div id='top' className='volun_wrapp'>
            <div className='volun_content'>
                <div className='volun_head'>
                    <img className='img-link' src={background} alt="" />

                </div>
                <div className='volun_overlay'>
                    <div className='container'>
                        <div className='volun_description'>
                            <h1>BẢO VỆ DI SẢN</h1>
                            <h2>BẰNG TÌNH YÊU VÀ Ý THỨC CỘNG ĐỒNG</h2>
                            <h3>Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại đảm bảo sự bền vững của di sản văn hóa. </h3>
                            <button className='btn_reg'>THAM GIA NGAY</button>
                        </div>
                    </div>
                </div>

                <div className='volun_reach'>
                    <div className='container'>
                        <div className='reach_content'>
                            <div className='row'>
                                <div className='col-12 col-xl-7'>
                                    <div className='left_content'>
                                        <div className='title'>
                                            <h1>Ở ĐÂU CÓ CÁC BẠN, <span>Ở ĐÓ CÓ CHÚNG TÔI</span> </h1>
                                            <h2>TRADICORE -  ĐỒNG HÀNH TRÊN MỌI NẺO ĐƯỜNG</h2>
                                            <p>(Baohatinh.vn) - Trong những tình huống đặc biệt, người làm báo Hà Tĩnh đã vào cuộc với tinh thần dấn thân, trách nhiệm của người cầm bút. Đó là câu chuyện nghề mà các nhà báo chia sẻ trong dịp kỷ niệm 95 năm ngày Báo chí cách mạng Việt Nam.</p>
                                        </div>
                                        <div class="mb-3">
                                            <select class="content_select form-select form-select-lg" name="" id="">

                                                {tinhThanh.map((tinh, index) => {
                                                    return (
                                                        <option key={index} value="">{tinh}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                        <button className='btn_next'>TIẾP</button>
                                    </div>
                                </div>
                                <div className='col-12 col-xl-5'>
                                    <div className='right_content'>
                                        <div className='img-div'><img className='img-banDo' src={banDo} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Element name='volunteerAction'>
                    <VolunteerAction />
                </Element>
                <div className='volun_foot'>
                    <div className='foot_overlay'></div>
                    <div className='wrap_img'>
                        <img className="img-link" src={dongHanh} />
                        <div className='wrap_info'>
                            <h1>Thân mến! Tôi là TRADICORE. </h1>
                            <h2>TRÂN TRỌNG      <span>luôn là người đồng hành cùng bạn trên mọi nẻo đường.</span></h2>
                            <div className='wrap_icon'>
                                <button>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Volunteering