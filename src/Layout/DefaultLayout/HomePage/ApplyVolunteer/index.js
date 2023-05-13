import { faUpDown, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import bacHo from '~/assets/images/img-khoAnh/bacHo.jpg'
import Button from '~/components/Button'
import './ApplyVolunteer.scss'
import { library } from '@fortawesome/fontawesome-svg-core';


function ApplyVolunteer() {
    return (
        <div className='wrapper_apply'>
            <div className='container'>
                <div className='apply_content'>
                    <h1>APPLY <span> AS VOLUNTEER </span></h1>
                    <div className='row main_content'>
                        <div className='d-none d-xl-block col-sm-3'>
                            <div className='box_title'>
                                <div className='image-div'>
                                    <img className='img-link' src={bacHo} alt="" />
                                </div>
                                <p>"</p>
                                <p className='first_text'>Những giá trị tốt đẹp ấy được bảo tồn, gìn giữ đến ngày hôm nay có vai trò quan trọng của biết bao thế hệ người dân.</p>
                                <p className='name_tag'>Chủ tịch Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div className='col-sm-4 col-xl-3'>

                            <div className='box_des'>
                                <p className='description'> Đẩy mạnh tuyên truyền, quảng bá thông qua các hoạt động về nguồn, hành trình đến với địa chỉ đỏ; vận động thanh thiếu nhi hát Quốc ca tại các địa chỉ đỏ</p>
                                <Button className='box-btn' text>Quick View</Button>
                            </div>
                        </div>
                        <div className='col-sm-4 col-xl-3'>

                            <div className='box_des'>
                                <p className='description'>Tổ chức nhiều câu lạc bộ, đội hình tình nguyện hướng dẫn du lịch, giới thiệu danh lam, danh thắng, di sản văn hóa truyền thống của địa phương.</p>
                                <Button className='box-btn' text>Quick View</Button>
                            </div>
                        </div>
                        <div className='col-sm-4 col-xl-3'>

                            <div className='box_des'>
                                <p className='description'> Bảo vệ và phục hồi các công trình cổ, di tích lịch sử, tham gia các hoạt động làm sạch môi trường vùng xung quanh các di sản văn hóa Việt Nam.</p>
                                <Button className='box-btn' text>Quick View</Button>
                            </div>
                            <Button large text rightIcon={<FontAwesomeIcon icon={faUpLong} />}>APPLY NOW</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApplyVolunteer