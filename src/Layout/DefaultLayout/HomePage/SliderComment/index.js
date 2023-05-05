import Slider from 'react-slick';
import React from 'react'
import thuTuongNXP from '~/assets/images/img-khoAnh/thuTuongNXP.jpg'
import './SliderComment.scss'
import user from '~/assets/images/img-khoAnh/user.png'
import bacHo from '~/assets/images/img-khoAnh/bacHo.jpg'
import dongChiBQH from '~/assets/images/img-khoAnh/dongChiBQH.webp'



function SliderComment() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    const settingInIpad = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    const settingInMobile = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };


    const list = [
        {
            image: bacHo,
            name: 'Chủ tịch Hồ Chí Minh',
            comment: ' “Càng thấm nhuần chủ nghĩa Mác - Lênin bao nhiêu thì càng phải coi trọng những truyền thống văn hoá tốt đẹp của cha ông bấy nhiêu”.'
        },
        {
            image: user,
            name: 'Đồng chí giấu tên',
            comment: '“Phát triển con người toàn diện và xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc để văn hóa, con người Việt Nam thực sự trở thành sức mạnh nội sinh, động lực phát triển đất nước và bảo vệ Tổ quốc”.'
        },
        {
            image: thuTuongNXP,
            name: 'Thủ tướng Nguyễn Xuân Phúc',
            comment: '“Đánh mất di sản, dù chỉ là một phần thì cũng chính là đánh mất bản sắc của dân tộc ta”.'
        },
        {
            image: user,
            name: 'Đồng chí giấu tên',
            comment: '“Đảm bảo sự bền vững của di sản văn hóa - Nâng cao nhận thức về giá trị di sản, tạo động lực phát triển và bảo tồn.”.'
        },
        {
            image: dongChiBQH,
            name: 'Đồng chí Bùi Quang Huy',
            comment: '“Tuổi trẻ tham gia bảo tồn các giá trị văn hoá dân tộc; Tuổi trẻ tích cực tham gia vào quá trình sáng tạo và chuyển đổi giá trị văn hoá thành sức mạnh nội sinh, góp phần thúc đẩy sự phát triển của các ngành công nghiệp văn hóa.”.'
        },
        {
            image: user,
            name: 'Đồng chí giấu tên',
            comment: '“Một di sản được vinh danh đã khó, nhưng bảo tồn và phát huy được di sản đó mới là vấn đề quan trọng.”.'
        },
        {
            image: user,
            name: 'Đồng chí giấu tên',
            comment: '“Những “báu vật nhân văn sống” là những người đã gìn giữ hồn cốt di sản, là những truyền nhân cuối cùng của di sản ông cha. Vậy nhưng có những người đã sống lay lắt trong cảnh nghèo khổ, cơ cực của tuổi già xế bóng. Tại sao chúng ta có thể lãng quên họ?”.'
        },

    ]

    return (
        <div className='wrap'>
            <div className='overlay'></div>
            <div className='container top_content content_top'>
                <div className='top'>
                    <h1>“Báu vật nhân văn sống”</h1>
                    <p>Tôi nhớ trước đây, một vị tiền bối từng nói ... </p>
                </div>
            </div>

            <div className='container content'>
                <div className='hide_in_mobile_ipad wrapper_content'>
                    <Slider  {...settings}>
                        {list.map((item, index) => {
                            return (
                                <div key={index} className='box'>
                                    <div className='box_img'>
                                        <img className='img-link' src={item.image} alt="" />
                                    </div>
                                    <h2>{item.name}</h2>
                                    <p>{item.comment}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className='visi_only_ipad wrapper_content'>
                    <Slider  {...settingInIpad}>
                        {list.map((item, index) => {
                            return (
                                <div key={index} className='box'>
                                    <div className='box_img'>
                                        <img className='img-link' src={item.image} alt="" />
                                    </div>
                                    <h2>{item.name}</h2>
                                    <p>{item.comment}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className='hide_in_ipad_lg wrapper_content'>
                    <Slider  {...settingInMobile}>
                        {list.map((item, index) => {
                            return (
                                <div key={index} className='box'>
                                    <div className='box_img'>
                                        <img className='img-link' src={item.image} alt="" />
                                    </div>
                                    <h2>{item.name}</h2>
                                    <p>{item.comment}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>



        </div>
    )
}

export default SliderComment