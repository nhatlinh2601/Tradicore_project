import React from 'react'
import './Tours.scss'
import then from '~/assets/images/img-disanVH/then.jpg'
import xoeThai from '~/assets/images/img-disanVH/XoeThai.jpg'
import baiChoi from '~/assets/images/img-disanVH/BaiChoi.jpg'
import keoCo from '~/assets/images/img-disanVH/keoCo.jpg'
import danCa from '~/assets/images/img-disanVH/danCa.jpg'
import donCaTaiTu from '~/assets/images/img-disanVH/donCaTaiTu.jpg'
import leHoiAmThuc from '~/assets/images/img-khoAnh/tinhHoaNgheBun.jpg'


function Tours() {

    const list = [
        {
            title: '',
            name: '',
            des1: '',
            des1: '',
            des1: '',
            des1: '',
        },
        {
            title: '',
            name: '',
            des1: '',
            des1: '',
            des1: '',
            des1: '',
        },
        {
            title: '',
            name: '',
            des1: '',
            des1: '',
            des1: '',
            des1: '',
        },
        {
            title: '',
            name: '',
            des1: '',
            des1: '',
            des1: '',
            des1: '',
        },

    ]
    return (
        <div className='tours_wrap'>
            <div style={{ padding: '0px 100px' }} className='container'>
                <h1 className='title'>SỰ KIỆN CÓ THỂ BẠN QUAN TÂM </h1>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-6'>
                        <div className='tours_left'>
                            <div className='tours_left-box'>
                                <div className='wrap_img'>
                                    <img className='img-link' src={leHoiAmThuc} alt="" />
                                </div>
                                <div style={{ padding: '24px' }} className='tours_infor'>
                                    <h2 className='big'>Lễ hội ẩm thực Festival</h2>
                                    <h1 className='big' >Festival nghề truyền thống Huế 2023 tôn vinh tinh hoa nghề bún</h1>
                                    {<p className='big'>Công viên Thương Bạc (thành phố Huế).</p>}

                                    <div style={{ justifyContent: 'space-between', alignItems: 'center', fontWeight: '500' }} className='d-flex'>
                                        <p className='big'>Tối 29-4</p>
                                        <p className='big'>TP HUẾ</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-xl-6'>
                        <div className='tours_right'>

                            <div className='row'>
                                {list.map((item, index) => {
                                    return (
                                        <div key={index} className='col-12 col-sm-6'>
                                            <div className='box'>
                                                <div className='wrap_img'>
                                                    <img className='img-link' src={xoeThai} alt="" />
                                                </div>
                                                <div style={{ padding: '12px' }} className='tours_infor'>
                                                    <h2>Lễ hội ẩm thực Festival</h2>
                                                    <h1>Festival nghề truyền thống Huế 2023 tôn vinh</h1>
                                                    {/* <p>Công viên Thương Bạc (thành phố Huế).</p> */}

                                                    <div style={{ justifyContent: 'space-between', alignItems: 'center', fontWeight: '500' }} className='d-flex'>
                                                        <p>Tối 29-4</p>
                                                        <p>TP HUẾ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tours