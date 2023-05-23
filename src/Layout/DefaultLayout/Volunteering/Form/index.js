import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import './Form.scss'
import account1 from '~/assets/images/img-content/acc1.jpg'

function Form() {


    const [isShowing, setIsShowing] = useState(false)

    var inputE = document.querySelectorAll('.form-control')

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [addres, setAddres] = useState('');
    const [chiendich, setChiendich] = useState('');
    const [CMND, setCMND] = useState('');
    const [date, setDate] = useState('');

    const isEmty = (input) => {
        if (input.value.trim() === '') {
            return true;
        }
        return false;
    }



    const handleSubmit = (e) => {
        var num = 0;
        e.preventDefault();
        inputE.forEach((input) => {
            if (isEmty(input)) {
                var parent = input.parentNode;
                var spanText = parent.querySelector('span')
                spanText.innerText = 'Input field is require.'
            } else {
                num++;
            };
            if (num == 7) {
                setIsShowing(true)

            }
        });
    };

    const handleNameClick = (input) => {
        setName(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handleEmailClick = (input) => {
        setEmail(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handleCMNDClick = (input) => {
        setCMND(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handlePhoneClick = (input) => {
        setPhone(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handleAddresClick = (input) => {
        setAddres(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handleChiendichClick = (input) => {
        setChiendich(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }
    const handleDateClick = (input) => {
        setDate(input.value);
        var parent = input.parentNode;
        var spanText = parent.querySelector('span')
        spanText.innerText = ''
    }






    return (
        <div className='form_wrap'>
            <div className='container'>
                <div className='form_content'>
                    <div className='row'>
                        <div className='d-none d-xl-block col-xl-4'>
                            <div className='form_left'>
                                <div style={{ padding: '24px' }}>
                                    <button>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <h1>Đơn giản với một trái tim nhiệt huyết và tình yêu văn hóa.</h1>

                                    <div className='form_left-box'>
                                        <div style={{ padding: '16px' }}>
                                            <p style={{ marginTop: '20px' }}>Tradicore luôn là sự lựa chọn hàng đầu với các hoạt động tình nguyện baor vệ di sản, gìn giữ cộng đồng với các tổ chức, clb, đội nhóm uy tín trên khắp đất nước.</p>
                                            <div className='acc'>
                                                <div className='img_wrap'>
                                                    <img className='img-link' src={account1} alt="" />
                                                </div>
                                                <div>
                                                    <p className='acc_name'>Joshua Hong</p>
                                                    <p className='acc_product'>Product Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-12 col-xl-8'>

                            <h1 className='form_dk'>PHIẾU ĐĂNG KÝ
                            </h1>

                            <div className='row'>
                                <div className='col-12 col-sm-6'>
                                    <div className='right_ct'>
                                        <div class="form-group">
                                            <label for="">Họ tên</label>
                                            <input onChange={(e) => {
                                                handleNameClick(e.target);

                                            }} type="text"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>


                                        <div class="form-group">
                                            <label for="">Ngày sinh</label>
                                            <input onChange={(e) => {
                                                handleDateClick(e.target);

                                            }} type="date"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Địa chỉ</label>
                                            <input onChange={(e) => {
                                                handleAddresClick(e.target);

                                            }} type="text"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Đăng ký tham gia chiến dịch</label>
                                            <input onChange={(e) => {
                                                handleChiendichClick(e.target);

                                            }} type="text"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <div className='right_ct'>
                                        <div class="form-group">
                                            <label for="">CMND/ CCCD</label>
                                            <input onChange={(e) => {
                                                handleCMNDClick(e.target);

                                            }} type="text"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Điện thoại liên lạc</label>
                                            <input onChange={(e) => {
                                                handlePhoneClick(e.target);

                                            }} type="text"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email</label>
                                            <input onChange={(e) => {
                                                handleEmailClick(e.target);

                                            }} type="email"
                                                class="form-control" name="Hoten" id="" aria-describedby="helpId" placeholder="" />
                                            <span id="helpId" class="form-text text-muted"></span>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='btn_dk'>ĐĂNG KÝ</button>


                        </div>



                    </div>

                    {
                        isShowing && <div className="modal__heart">
                            <div className="modal__overlay"></div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} className='container'>
                                <div className="modal__heart-content">
                                    <div className='modal__content'>
                                        <button className="modal__succes-icon">
                                            <FontAwesomeIcon style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)' }} icon={faCheck} />
                                        </button>
                                        <div style={{ marginTop: '40px' }} className="modal__notify">
                                            <h3 className="modal__notify-product">Đăng ký thành công!</h3>
                                            <p>Kiểm tra email để nhận thông tin từ Tradicore nhé.</p>
                                        </div>
                                        <div className="modal__submit">
                                            <button onClick={() => {
                                                setIsShowing(false);
                                                window.location.href = `/`;
                                            }} className="modal__btn-submit">Trang chủ</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >

    )
}

export default Form