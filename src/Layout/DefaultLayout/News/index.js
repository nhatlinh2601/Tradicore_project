import styles from './News.scss'
import headNew4 from '~/assets/images/img-news/bg.webp'
import tranhDH from '~/assets/images/img-news/tranhDH.webp'
import vanHoaCongChieng from '~/assets/images/img-disanVH/KhongGianVHCongChieng.jpg'
import trangPhucDT from '~/assets/images/img-news/trangPhucDT.jpg'
import hatXam from '~/assets/images/img-news/hatXam.jpg'
import caTru from '~/assets/images/img-disanVH/CaTru.jpg'
import muaRoi from '~/assets/images/img-khoAnh/muaRoiNuoc1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function New() {

    const News = [];

    return (
        <div className='wrapperNew'>


            <div className='col-12'>
                <div className='head'>
                    <img src={headNew4} alt='' className='head__image' />
                    <h1 className='head__title'>Tin tức</h1>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xl-8'>
                        <div className='content__trai'>
                            <div className='itemtrai itemtrai-1'>
                                <a href='' />
                                <div className='img-container'><img src={vanHoaCongChieng} className='itemtrai__image' /></div>
                                <div className='itemtrai__footer'>
                                    <h1>Bảo tồn di sản văn hóa cồng chiêng Tây Nguyên bắt đầu từ di sản "sống"
                                    </h1>
                                    <p>
                                        Với đồng bào các dân tộc bản địa, cồng chiêng không đơn thuần là một nhạc cụ mà được
                                        xem là vật thiêng gắn với đời sống tâm linh, tiếng chiêng là sợi dây kết nối giữa con người và đấng siêu nhiên...
                                    </p>
                                    <div className='itemtrai__footer__footer'>
                                        <span>
                                            <span> By Admin | </span>
                                            <span>8 comment</span>
                                        </span>
                                        <a href=''>ĐỌC TIẾP </a>
                                    </div>
                                </div>
                            </div>
                            <div className='itemtrai itemtrai-2'>
                                <a href='' />
                                <div className='img-container'><img src={caTru} className='itemtrai__image' /></div>
                                <div className='itemtrai__footer'>
                                    <h1>Ca trù là gì? Nguồn gốc và đặc điểm của ca trù
                                    </h1>
                                    <p>
                                        Ca trù là một loại hình âm nhạc truyền thống của miền Bắc nước ta.
                                        Tuy nhiên hiện nay, loại hình nghệ thuật này ít được giới trẻ đón nhận.
                                    </p>
                                    <div className='itemtrai__footer__footer'>
                                        <span>
                                            <span> By Admin | </span>
                                            <span>10 comment</span>
                                        </span>
                                        <a href=''>ĐỌC TIẾP </a>
                                    </div>
                                </div>
                            </div>
                            <div className='itemtrai itemtrai-3'>
                                <a href='' />
                                <div className='img-container'><img src={muaRoi} className='itemtrai__image' /></div>
                                <div className='itemtrai__footer'>
                                    <h1>Nghệ thuật múa rối nước Việt Nam: Lịch sử và hiện trạng.
                                    </h1>
                                    <p>
                                        Múa rối nước là sân khấu nghệ thuật đặc sắc của văn hóa lúa nước,
                                        ra đời hầu như cùng lúc với sự hình thành nền văn hóa Đại Việt.

                                    </p>
                                    <div className='itemtrai__footer__footer'>
                                        <span>
                                            <span> By Admin | </span>
                                            <span>12 comment</span>
                                        </span>
                                        <a href=''>ĐỌC TIẾP </a>
                                    </div>
                                </div>
                            </div>



                            <div className='mucluc'>
                                <div className='mucluc-item item-1'>1</div>
                                <div className='mucluc-item item-2'>2</div>

                            </div>
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='content__phai'>
                            <div className='search-box'>
                                <input type="text"
                                    className='search-txt'
                                    placeholder='Tìm kiếm'
                                />
                                <a href='#' className='search-btn'>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </div>

                            <h1>BÀI VIẾT GẦN ĐÂY</h1>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <div className='div_img'>
                                            <img className='img-link' src={tranhDH} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <h2>Người giữ nghề tranh Đông Hồ</h2>
                                        <p className='p_content'> Trải qua bao đổi thay, làng nghề tranh dân gian Đông Hồ (làng Hồ,...)
                                        </p>
                                        <div style={{ justifyContent: 'space-between' }} className='d-flex'>
                                            <p>2 ngày trước</p>
                                            <p>Xem thêm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <div className='div_img'>
                                            <img className='img-link' src={trangPhucDT} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <h2>Lan tỏa vẻ đẹp và giá trị trang phục truyền thống</h2>
                                        <p className='p_content'> Trang phục truyền thống luôn chứa đựng ...
                                        </p>
                                        <div style={{ justifyContent: 'space-between' }} className='d-flex'>
                                            <p>4 ngày trước</p>
                                            <p>Xem thêm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <div className='div_img'>
                                            <img className='img-link' src={hatXam} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <h2>Người lưu giữ, bảo tồn và phát triển nghệ thuật hát Xẩm</h2>
                                        <p className='p_content'> Nghệ sĩ Thu Phương được biết đến là một trong ...
                                        </p>
                                        <div style={{ justifyContent: 'space-between' }} className='d-flex'>
                                            <p>2 ngày trước</p>
                                            <p>Xem thêm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default New;