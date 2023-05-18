import React from 'react'
import { useState } from 'react'
import Slider from "react-slick";
import './AlbumCom.scss'
import Button from '~/components/Button'
import image1 from '~/assets/images/img-khoAnh/congChieng.jpg'
import image2 from '~/assets/images/img-khoAnh/lamGom1.jpg'
import image3 from '~/assets/images/img-khoAnh/muaRoiNuoc1.jpg'
import image4 from '~/assets/images/img-khoAnh/suThiTN.jpg'
import image5 from '~/assets/images/img-khoAnh/tranhSonMai.jpg'
import image6 from '~/assets/images/img-khoAnh/toHe.jpg'
import image7 from '~/assets/images/img-khoAnh/hatXam1.jpg'
import image8 from '~/assets/images/img-khoAnh/trangPhuc1.jpg'
import image9 from '~/assets/images/img-khoAnh/tranhDongHo1.jpg'
import account1 from '~/assets/images/img-content/acc1.jpg'
import account2 from '~/assets/images/img-content/acc2.jpg'
import account3 from '~/assets/images/img-content/acc3.jpg'

import { SliderCongChieng, SliderLamGom, SliderMuaRoiNuoc, SliderHatXam, SliderSonMai, SliderSuThi, SliderToHe, SliderTrangPhuc, SliderTranh } from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { boxCongChieng, boxLamGom, muaRoiNuoc, suThi, sonMai, toHe, xam, trangPhucDT, tranhDH } from './Content';


function AlbumCpn() {

  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img className='img-link' src={images2[i]} />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const sliderImages = [
    {
      image: image1,
      name: 'Không gian văn hóa Cồng chiêng Tây Nguyên',
      list: SliderCongChieng,
      box: boxCongChieng

    },
    {
      image: image2,
      name: 'Nghề làm gốm của người Chăm',
      list: SliderLamGom,
      box: boxLamGom
    },
    {
      image: image3,
      name: 'Múa rối nước',
      list: SliderMuaRoiNuoc,
      box: muaRoiNuoc

    },
    {
      image: image7,
      name: 'Nghệ thuật hát xẩm',
      list: SliderHatXam,
      box: xam
    },
    {
      image: image8,
      name: 'Trang phục truyền thống đồng bào dân tộc',
      list: SliderTrangPhuc,
      box: trangPhucDT
    },
    {
      image: image9,
      name: 'Nghề làm tranh Đông Hồ',
      list: SliderTranh,
      box: tranhDH
    },
    {
      image: image4,
      name: 'Sử thi Tây Nguyên',
      list: SliderSuThi,
      box: suThi
    },
    {
      image: image5,
      name: '	Nghệ thuật Sơn mài',
      list: SliderSonMai,
      box: sonMai
    },
    {
      image: image6,
      name: 'Nghệ thuật tò he',
      list: SliderToHe,
      box: toHe
    },

  ]


  const [isShowing, setIsShowing] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);



  const [comments, setComments] = useState([
    {
      id: 1,
      content: 'Thật tuyệt vời!',
      author: 'Nhat Linh Tran',
      time: '8 minutes ago',
      image: account1
    },
    {
      id: 2,
      content: 'Cám ơn bạn đã chia sẻ!',
      author: 'John Doe',
      time: '10 minutes ago',
      image: account2
    },
  ]);

  const handleAddComment = (content, author) => {
    const newComment = {
      id: Date.now(),
      content,
      author,
      time: 'just now',
      image: account3
    };
    setComments((prevComments) => [newComment, ...prevComments.slice(0, 1)]);
  };

  const [liked, setLiked] = useState(false);
  const [heartQuantity, setHeartQuantity] = useState(31);


  const handleClickHeart = () => {
    setLiked(prevLiked => !prevLiked);
    setHeartQuantity(prevQuantity => (liked ? prevQuantity - 1 : prevQuantity + 1));

  };
  const heartColor = liked ? '#2f7c72' : '#ccc';



  return (
    <div className='wrapperAlb'>
      <div className='container'>

        <div className='content_top'>
          <h1>Thân mến! Tôi là TRADICORE.</h1>
          <p>Đảm bảo sự bền vững của di sản văn hóa - Nâng niu hồn dân tộc.
          </p>
          <Button className='btn-explore' large text to={'tradicoreSocial'}>Khám phá tại đây!</Button>
        </div>

        <div className='main_content'>

          <div id='posts' className='row'>

            {
              sliderImages.map((item, index) => {

                return (

                  <div key={index} className='col-12 col-sm-4'>
                    <div className='image_content'>
                      <img className='image-link' src={item.image} alt="img" />
                      <Button onClick={() => {
                        setIsShowing(true);
                        setSelectedImageIndex(index)
                      }} text className={'btn-quickView'}>Xem thêm</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {
          isShowing
          &&
          <div className="modal-alb">
            <div className='modal_overlay'></div>
            <div className='container'>
              <div className='modal_content show'>
                <div className='row'>

                  <div className='col-12 col-xl-8 '>
                    <div className='col-flex'>
                      <Slider {...settings}>
                        {sliderImages[selectedImageIndex].list.map((image, index) => (
                          <div className='slider_image'>
                            <div className='div-img' key={index}>
                              <img className='img-link' src={image} />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>

                  </div>
                  <div className='col-12 col-xl-4'>
                    <div className='box_description'>
                      <div className='box-1'>
                        <h2>{sliderImages[selectedImageIndex].name}</h2>
                        <p>{sliderImages[selectedImageIndex].box.des1}</p>
                        <p>{sliderImages[selectedImageIndex].box.des2}</p>
                        <p className='time'>{sliderImages[selectedImageIndex].box.time}</p>
                        <p className='place'>{sliderImages[selectedImageIndex].box.place}</p>
                        <p className='trangThai'>{sliderImages[selectedImageIndex].box.trangThai}</p>
                      </div>

                      <div className='box-2'>
                        <div style={{ alignItems: 'center' }} className='d-flex'>
                          <button style={{ color: heartColor }} onClick={handleClickHeart}>
                            <FontAwesomeIcon icon={faHeart} />

                          </button>
                          <span className='heart_quantity'>{heartQuantity}</span>
                          <p className='title'>Comments</p>
                        </div>

                        <CommentForm onAddComment={handleAddComment} />
                        <div>
                          <ul>
                            {comments.map((comment) => (
                              <div className='comments_acc' key={comment.id}>
                                <li>{comment.content}</li>
                                <div className='account'>
                                  <div className='d-flex'>
                                    <div className='acc_img'>
                                      <img className='img-link' src={comment.image} alt="" />
                                    </div>
                                    <p className='name'>{comment.author}</p>
                                  </div>
                                  <p className='time_ago'>{comment.time}</p>
                                </div>
                              </div>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={() => {
                  setIsShowing(false)
                }} className='close-icon'>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>

            </div>


          </div>}


      </div>

    </div >
  )
}
function CommentForm({ onAddComment }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onAddComment(content, author);
      setContent('');
      setAuthor('');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Leave a comment"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setAuthor('Nhat Linh')
        }
        }
      />
      <div onClick={handleSubmit} className='icon'>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </form>
  );
}
export default AlbumCpn