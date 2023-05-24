import React, { useState } from 'react'
import background from '~/assets/images/img-volunteer/bg.webp'
import banDo from '~/assets/images/img-volunteer/hoatDong/banDo.png'
import VolunteerAction from './VolunteerAction'
import { Element } from 'react-scroll';
import './Volunteering.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { tinhThanh } from './data'
import { faHeart, faHandHoldingHeart, faPeopleGroup, faHouse, faL, faShieldHeart, faEarth, faGlobe, faSchool } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




function Volunteering() {



    return (
        <div id='top' className='volun_wrapp'>
            <div className='volun_content'>
                <div className='volun_head'>
                    <img className='img-link' src={background} alt="" />

                    <div className='volun_overlay'>
                        <div className='container'>
                            <div className='volun_description'>
                                <h1>BẢO VỆ DI SẢN</h1>
                                <h2>BẰNG TÌNH YÊU VÀ Ý THỨC CỘNG ĐỒNG</h2>
                                <h3>Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại đảm bảo sự bền vững của di sản văn hóa. </h3>
                                <Link to='/volunteering/form'><button className='btn_reg'>THAM GIA NGAY</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 0' }} className='volun_organizations'>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-xl-7'>
                                <div className='organiz_description'>
                                    <h1>Chung tay, Hành động và Thay đổi</h1>
                                    <p>Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại đảm bảo sự bền vững của di sản văn hóa.</p>
                                </div>
                            </div>
                            <div style={{ flexDirection: 'column', justifyContent: 'center' }} className='col-12 col-xl-5 d-flex'>
                                <div >
                                    <div className='row'>

                                        <div className='col-6'>
                                            <div className='og_box'>
                                                <button>
                                                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                                                </button>
                                                <h2>30.4k</h2>
                                                <p>Trái tim Việt</p>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='og_box'>
                                                <button>
                                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                                </button>
                                                <h2>8.4k</h2>
                                                <p>Tổ chức, CLB, Đội nhóm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-sm-12 col-xl-5'>
                                <div className='col-12'>
                                    <div style={{ background: '#333' }} className='og_box-top'>

                                        <h1>Các tổ chức, CLB, đội nhóm</h1>

                                    </div>
                                </div>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <div style={{ background: 'antiquewhite' }} className='og_box-left'>
                                            <div className='box_overlay'>
                                                <h1>Trung tâm Quản lý Bảo tồn Di sản Văn hóa</h1>
                                            </div>
                                            <button>
                                                <FontAwesomeIcon icon={faShieldHeart} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div style={{ background: '#ccdfdb' }} className='og_box-left m-r'>
                                            <div className='box_overlay'>
                                                <h1>Trung tâm Quản lý Bảo tồn Di sản Văn hóa</h1>
                                            </div>
                                            <button>
                                                <FontAwesomeIcon icon={faEarth} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-4 col-xl-2 m'>
                                <div className='mid_box'>
                                    <div style={{ padding: '24px' }}>
                                        <h1>Tham gia team chúng tôi</h1>
                                        <p>Đơn giản với một trái tim nhiệt huyết và tình yêu văn hóa. </p>
                                        <button>
                                            <FontAwesomeIcon icon={faHouse} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-sm-8 col-xl-5'>
                                <div className='col-12'>
                                    <div style={{ display: 'flex', alignItems: 'center', background: '#ccdfdb' }} className='og_box-right'>
                                        <div style={{ display: 'flex', alignItems: 'center' }} className='row'>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className='col-8'><h1 >Trung tâm Xúc tiến, Quảng bá di sản văn hóa phi vật thể Việt Nam.</h1></div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className='col-4'>
                                                <button>
                                                    <FontAwesomeIcon icon={faGlobe} />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div style={{ display: 'flex', alignItems: 'center', background: 'antiquewhite' }} className='og_box-right m-t-15'>
                                        <div style={{ display: 'flex', alignItems: 'center' }} className='row'>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className='col-8'><h1 >Tổ chức giáo dục ý thức bảo vệ di sản văn hóa cho thế hệ trẻ.</h1></div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className='col-4'>
                                                <button>
                                                    <FontAwesomeIcon icon={faSchool} />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



                <Element name='volunteerAction'>
                    <VolunteerAction />
                </Element>

                <div className='volun_reach'>
                    <div className='container'>
                        <div className='reach_content'>
                            <div className='row'>
                                <div className='col-12 col-xl-7'>
                                    <div className='left_content'>
                                        <div className='title'>
                                            <h1>Ở ĐÂU CÓ CÁC BẠN, <span>Ở ĐÓ CÓ CHÚNG TÔI</span> </h1>
                                            <h2>TRADICORE -  ĐỒNG HÀNH TRÊN MỌI NẺO ĐƯỜNG</h2>
                                            <p>Tradicore luôn là sự lựa chọn hàng đầu với các hoạt động tình nguyện bảo vệ di sản, gìn giữ cộng đồng với các tổ chức, clb, đội nhóm uy tín trên khắp đất nước.</p>
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
                                        <Link to='/volunteering/form'><button className='btn_next'>TIẾP</button></Link>
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


                {/* <div className='volun_foot'>
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

                </div> */}

            </div>
        </div>
    )
}

export default Volunteering