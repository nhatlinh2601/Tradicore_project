import React from 'react'
import './Tours.scss'
import hoiAn from '~/assets/images/events/hoiAn.jpg'
import tamGiacMach from '~/assets/images/events/tamgiacmach.jpg'
import ruongBacThang from '~/assets/images/events/ruongbacthang.jpg'
import damTrau from '~/assets/images/events/DamTrau.jpg'
import hoiChem from '~/assets/images/events/hoiChem.jpg'


function Tours() {

    const list = [
        {
            title: 'Chủ đề : "Sức sống cao nguyên đá"',
            name: 'Lễ hội hoa tam giác mạch Đồng Văn',
            time: ' 26/11',
            place: 'huyện Đồng Văn, tỉnh Hà Giang',
            image: tamGiacMach,
        },
        {
            title: 'Tuần văn hóa – Du lịch Mường Lò.',
            name: 'Lễ hội ruộng bậc thang Mù Cang Chải',
            time: 'Tháng 9/2023',
            place: 'Huyện Mù Cang Chải',
            image: ruongBacThang,
        },
        {
            title: 'Nét đẹp văn hóa của vùng đất đỏ bazan',
            name: 'Lễ hội đâm trâu Tây Nguyên',
            time: 'T10/2023',
            place: 'Tây Nguyên',
            image: damTrau,
        },
        {
            title: 'Về Thụy Phương dự hội làng Chèm',
            name: 'Lễ hội Đình - đền Chèm tại Hà Nội',
            time: '14-15-16/5 âm lịch',
            place: '',
            image: hoiChem,
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
                                    <img className='img-link' src={hoiAn} alt="" />
                                </div>
                                <div style={{ padding: '29px' }} className='tours_infor'>
                                    <h2 className='big'>Đưa nhau đi trốn đến Hội An ngắm đêm hội Trung Thu ngay thôi!</h2>
                                    <h1 className='big' >Tết Trung thu</h1>
                                    {<p className='big'> Hội An trở nên đẹp lộng lẫy, cực kỳ náo nhiệt với nhiều hoạt động thi vị cho đêm hội Trăng rằm. </p>}

                                    <div style={{ justifyContent: 'space-between', alignItems: 'center', fontWeight: '500' }} className='d-flex'>
                                        <p className='big'>12 – 15 / 08 Âm lịch</p>
                                        <p className='big'>Phố cổ Hội An, Quảng Nam</p>
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
                                                    <img className='img-link' src={item.image} alt="" />
                                                </div>
                                                <div style={{ padding: '12px' }} className='tours_infor'>
                                                    <h2>{item.title}</h2>
                                                    <h1>{item.name}</h1>

                                                    <div style={{ justifyContent: 'space-between', alignItems: 'center', fontWeight: '500' }} className='d-flex'>
                                                        <p>{item.time}</p>
                                                        <p>{item.place}</p>
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