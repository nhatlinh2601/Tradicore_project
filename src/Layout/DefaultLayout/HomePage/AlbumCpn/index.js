import React from 'react'
import './AlbumCom.scss'
import Button from '~/components/Button'
import image1 from '~/assets/images/img-khoAnh/congChieng.jpg'
import image2 from '~/assets/images/img-khoAnh/lamGom.png'
import image3 from '~/assets/images/img-khoAnh/muaRoiNuoc.jpg'
import image4 from '~/assets/images/img-khoAnh/suThiTN.jpg'
import image5 from '~/assets/images/img-khoAnh/tranhSonMai.jpg'
import image6 from '~/assets/images/img-khoAnh/toHe.jpg'
import image7 from '~/assets/images/img-khoAnh/hatXam.jpg'
import image8 from '~/assets/images/img-khoAnh/trangPhuc.jpg'
import image9 from '~/assets/images/img-khoAnh/tranhDongHo.jpg'


function AlbumCpn() {

  const sliderImages = [
    {
      image: image1,
      name: 'Không gian văn hóa Cồng chiêng Tây Nguyên'
    },
    {
      image: image2,
      name: 'Nghề làm gốm của người Chăm'
    },
    {
      image: image3,
      name: 'Múa rối nước'
    },
    {
      image: image4,
      name: 'Sử thi Tây Nguyên'
    },
    {
      image: image5,
      name: '	Nghệ thuật Sơn mài'
    },
    {
      image: image6,
      name: 'Nghệ thuật tò he'
    },
    {
      image: image7,
      name: 'Nghệ thuật hát xẩm'
    },
    {
      image: image8,
      name: 'Trang phục truyền thống đồng bào dân tộc'
    },
    {
      image: image9,
      name: 'Nghề làm tranh Đông Hồ'
    },
  ]


  return (


    <div className='wrapper'>
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
                      <Button text className={'btn-quickView'}>Quick View</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


      </div>

    </div >
  )
}

export default AlbumCpn