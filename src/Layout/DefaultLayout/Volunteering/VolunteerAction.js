import React from 'react'
import './Volunteering.scss'
import hd1 from '~/assets/images/img-volunteer/hoatDong/hd6.jpg'
import hd2 from '~/assets/images/img-volunteer/hoatDong/hd5.jpg'
import hd3 from '~/assets/images/img-volunteer/hoatDong/hd3.jpg'

function VolunteerAction() {
    return (
        <div className='volun_curren'>
            <div className='container'>
                <div className='overlay'></div>
                <h1 className='curren_title'>HOẠT ĐỘNG SẮP TỚI</h1>
                <div className='row'>
                    <div className='col-12 col-md-6 col-xl-4'>
                        <div className='box_event'>
                            <div className='box_image'>
                                <img className='' src={hd1} alt="" />
                            </div>
                            <h2>Hành trình địa chỉ đỏ</h2>
                            <p>Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh</p>

                            <p className='place'>Ha Noi</p>
                            <p className='time'>27/4 - 24/5</p>
                            <button>Tham gia</button>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-xl-4'>
                        <div className='box_event'>
                            <div className='box_image'>
                                <img className='' src={hd2} alt="" />
                            </div>
                            <h2>Hành trình địa chỉ đỏ</h2>
                            <p>Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh</p>

                            <p className='place'>Ha Noi</p>
                            <p className='time'>27/4 - 24/5</p>
                            <button>Tham gia</button>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-xl-4'>
                        <div className='box_event'>
                            <div className='box_image'>
                                <img className='' src={hd3} alt="" />
                            </div>
                            <h2>Hành trình địa chỉ đỏ</h2>
                            <p>Trong những tình huống đặc biệt, người làm báo Hà TĩnhTrong những tình huống đặc biệt, người làm báo Hà Tĩnh</p>

                            <p className='place'>Ha Noi</p>
                            <p className='time'>27/4 - 24/5</p>
                            <button>Tham gia</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VolunteerAction