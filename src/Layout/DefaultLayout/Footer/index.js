import React from 'react'
import './Footer.scss'
import pay1 from '~/assets/images/img-content/icon-pay-01.png.webp'
import pay2 from '~/assets/images/img-content/icon-pay-02.png.webp'
import pay3 from '~/assets/images/img-content/icon-pay-03.png.webp'
import pay4 from '~/assets/images/img-content/icon-pay-04.png.webp'
import pay5 from '~/assets/images/img-content/icon-pay-05.png.webp'


function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className="footer__content container">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="footer__item">
                                <div className="footer__item-title">HOME</div>
                                <div className="footer__item-list">
                                    <a href="" className="footer__item-link">Volunteering</a>
                                    <a href="" className="footer__item-link">News</a>
                                    <a href="" className="footer__item-link">TradicoreSocial</a>
                                    <a href="" className="footer__item-link">Tours</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="footer__item">
                                <div className="footer__item-title">HELP</div>
                                <div className="footer__item-list">
                                    <a href="" className="footer__item-link">Track Order</a>
                                    <a href="" className="footer__item-link">Returns</a>
                                    <a href="" className="footer__item-link">Shipping</a>
                                    <a href="" className="footer__item-link">FAQs</a>
                                </div>
                            </div>
                        </div>



                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="footer__item">
                                <div className="footer__item-title">GET IN TOUCH</div>
                                <div className="footer__item-list">
                                    <a href="" className="footer__item-link">
                                        <p className="item__address-details">Any questions? Let us know in store at 470 Tran Dai Nghia or call us on 0346242297</p>
                                    </a>
                                    <div className="item__icon">
                                        <i className="fa-brands fa-facebook"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-pinterest"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="footer__item">
                                <div className="footer__item-title">NEWSLETTER</div>

                                <input type="email" className="item__input-email" placeholder="email@example.com">

                                </input>
                                <button className="item__btn-submit">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__pay">
                    <div className="footer__pay-content">
                        <div className="footer__pay-img">
                            <img src={pay1} alt="" />
                        </div>
                        <div className="footer__pay-img">
                            <img src={pay2} alt="" />
                        </div>
                        <div className="footer__pay-img">
                            <img src={pay3} alt="" />
                        </div>
                        <div className="footer__pay-img">
                            <img src={pay4} alt="" />
                        </div>
                        <div className="footer__pay-img">
                            <img src={pay5} alt="" />
                        </div>
                    </div>

                </div>

                <div className="footer__slogan">
                    <p> Copyright ©2023 All rights reserved | This website is made with <span className="footer__icon">
                        <i className="fa-solid fa-heart"></i>
                    </span> by <span className="footer__link">
                            <a href="">BOY PLANET</a>
                        </span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer