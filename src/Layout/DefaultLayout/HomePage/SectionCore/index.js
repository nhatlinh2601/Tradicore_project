import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sectionCore.scss'
import { faBook, faBullhorn, faHammer, faHandHoldingHeart, faHeader, faHouse, faLocation, faPlane } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images/img-content/content2.jpg';
import { Link } from 'react-router-dom';

function SectionCore() {

    const contents = [
        {
            title: 'Những “báu vật nhân văn sống” có đang bị lãng quên?',
            content: 'Dù di sản văn hóa phi vật thể được vinh danh ngày càng nhiều, nhưng những “báu vật nhân văn sống” đang dần bị lãng quên',
            icon: faHouse
        },
        {
            title: 'Để văn hoá dân tộc không bị mai một',
            content: 'Xưa khoai sắn đói chúng ta mới ăn nhưng giờ là đặc sản. Văn hóa dân gian cũng vậy. Văn hóa cần được giữ gìn bới chính cộng đồng',
            icon: faBullhorn
        },
        {
            title: 'Níu giữ những giá trị đang dần tan biến',
            content: 'Đó là những đường nét điêu khắc đang bị thời gian tàn phá ;những diễn xướng dân gian truyền thống đang dần biến mất; không gian văn hóa đình làng dần thu hẹp... Tất cả vẫn còn hiện hữu, nhưng cũng đang dần tan biến',
            icon: faPlane
        },
        {
            title: 'Chất keo gắn kết bằng tình yêu di sản',
            content: 'Tình cảm đó được ươm mầm, nảy lộc đâm chồi từ điểm chung là giá trị nguyên bản của tình yêu di sản - vững bền hơn mọi thử thách!',
            icon: faHandHoldingHeart
        },
        {
            title: 'Bảo tồn: cấp thiết nhưng đừng vội, ẩu',
            content: 'Những bước đi quá đà, ồ ạt. Lại có khi “bình cũ rượu mới” để tân trang lại nội dung mà không sao tránh khỏi kệch cỡm.',
            icon: faBook
        }
    ]
    return (
        <div className='wrap-section_core'>
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-6'>
                        <div className='left_content'>
                            {
                                contents.map((item, index) => {
                                    return (
                                        <Link key={index} to='/news'>
                                            <div className={`content_item ${index === 1 ? 'second-item' : ''}`}>
                                                <div className='item-info'>
                                                    <h3 className='item-title'>
                                                        {item.title}
                                                    </h3>
                                                    <p>
                                                        {item.content}
                                                    </p>
                                                </div>
                                                <div className='content_icon'>
                                                    <FontAwesomeIcon icon={item.icon} />
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCore;