import { faGlobe, faHand, faHandHoldingHeart, faHouse, faUpDown, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import bacHo from '~/assets/images/img-khoAnh/bacHo.jpg'
import Button from '~/components/Button'
import './ApplyVolunteer.scss'
import { Link } from 'react-router-dom'


function ApplyVolunteer() {
    return (
        <div className='wrapper_apply'>
            <div className='container'>
                <div className='apply_content'>
                    <h1>BẢO VỆ DI SẢN <br /> BẰNG TÌNH YÊU VÀ Ý THỨC CỘNG ĐỒNG</h1>

                    <div className='row main_content'>
                        <div className='d-none d-xl-block col-sm-3'>
                            <div className='box_title'>
                                <div className='image-div'>
                                    <img className='img-link' src={bacHo} alt="" />
                                </div>
                                <p className='first_text'> Những giá trị tốt đẹp ấy được bảo tồn, gìn giữ đến ngày hôm nay có vai trò quan trọng của biết bao thế hệ người dân.</p>
                                <p className='name_tag'>Chủ tịch Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-xl-3'>

                            <div className='box_des'>
                                <FontAwesomeIcon style={{ color: '#8cbb3f', fontSize: '36px' }} icon={faHandHoldingHeart} />
                                <h3>Chung tay</h3>
                                <p className='description'>Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại đảm bảo sự bền vững của di sản văn hóa.</p>
                                <Button className='box-btn' text>
                                    <Link to={'/volunteering'}> Xem thêm </Link>

                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-6 col-xl-3'>

                            <div className='box_des'>
                                <FontAwesomeIcon style={{ color: '#8cbb3f', fontSize: '36px' }} icon={faGlobe} />
                                <h3>Hành động</h3>
                                <p className='description'>Bắt đầu từ những điều nhỏ nhất,  tham gia vào việc bảo vệ các di tích, du lịch văn hóa, góp phần giáo dục và truyền thông về di sản.</p>
                                <Button className='box-btn' text>
                                    <Link to={'/volunteering'}> Xem thêm </Link>
                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-12 col-xl-3'>

                            <div className='box_des'>
                                <FontAwesomeIcon style={{ color: '#8cbb3f', fontSize: '36px' }} icon={faHouse} />
                                <h3>Thay đổi</h3>
                                <p className='description'>Tôi và bạn.Hành động và thay đổi. Di sản văn hóa Việt Nam không chỉ mãi bảo tồn bền vững, mà còn phát triển và vươn xa.</p>
                                <Button className='box-btn' text>
                                    <Link to={'/volunteering'}> Xem thêm </Link>

                                </Button>
                            </div>
                            <div style={{ marginTop: '60px', float: 'right' }}><Button large text rightIcon={<FontAwesomeIcon icon={faUpLong} />}>THAM GIA</Button></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplyVolunteer