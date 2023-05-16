import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sectionCore.scss'
import { faBook, faBullhorn, faHammer, faHandHoldingHeart, faHeader, faHouse, faLocation, faPlane } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images/img-content/content2.jpg';
import { Link } from 'react-router-dom';
import hd4 from '~/assets/images/img-content/new1.jpg'
import hd2 from '~/assets/images/img-content/new2.jpg'
import hd3 from '~/assets/images/img-content/new3.jpg'
import hd1 from '~/assets/images/img-content/new4.jpg'


function SectionCore() {

    const contents = [
        {
            title: 'Nhiều nỗ lực trong bảo tồn di sản văn hóa tại Lâm Đồng',
            content: 'Theo UBND tỉnh Lâm Đồng, trên địa bàn tỉnh hiện có 37 di tích được xếp hạng, ... ',
            time: '4 ngày trước',
            author: 'Báo Tiên Phong',
            image: hd1,

        },
        {
            title: 'Báo động nguy cơ thất truyền nhiều di sản văn hóa',
            content: 'Ông Đào Trọng Thi cảnh báo: “Nhìn nhận một cách toàn diện thì công tác bảo tồn và phát huy giá trị di sản văn hóa ...',
            time: '12 ngày trước',
            author: 'Báo Tiên Phong',
            image: hd2
        },
        {
            title: 'Giới thiệu âm nhạc truyền thống cung đình tại Festival Huế 2022',
            content: 'Trong khuôn khổ tuần lễ Festival Huế 2022 ...',
            time: '20 ngày trước',
            author: 'Báo Tiên Phong',
            image: hd3
        },
        {
            title: 'Thanh niên xứ Thanh chuyển đổi số quảng bá di tích lịch sử - văn hóa - du lịch ở Sầm Sơn',
            content: 'TPO - Sáng 6/4, Tỉnh Đoàn Thanh Hóa đã tổ chức lễ ra mắt ... ',
            time: '1 tháng trước',
            author: 'Báo Tiên Phong',
            image: hd4
        },


    ]
    return (
        <div className='wrap-section_core'>
            <div className='container'>

                <div className='row row-center'>

                    <div className='col-lg-6'>
                        <div className='left_content'>
                            <div className='news_top'>
                                <h2>TIN TỨC NỔI BẬT</h2>
                            </div>
                            {
                                contents.map((item, index) => {
                                    return (
                                        <Link key={index} to='/news'>
                                            <div className={`content_item ${index === 0 ? 'second-item' : ''}`}>
                                                <div className='row'>
                                                    <div className='col-12 col-sm-7'>
                                                        <div className='item-info'>
                                                            <h3 className='item-title'>
                                                                {item.title}
                                                            </h3>
                                                            <p>
                                                                {item.content}
                                                            </p>
                                                            <div style={{ justifyContent: 'space-between' }} className='d-flex'>
                                                                <p className='time_ago'>
                                                                    {item.author}
                                                                </p>
                                                                <p className='time_ago'>
                                                                    {item.time}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center' }} className='col-12 col-sm-5'>
                                                        <div className='content_image'>
                                                            <img className='img-link' src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='content-img'>
                            <img className='img-link' src={images} alt="" />
                        </div>
                        <Link to='/news'>
                            <h3 className='see_moreh3'>
                                XEM THÊM
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCore;