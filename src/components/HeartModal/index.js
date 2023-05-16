import React, { useState } from 'react'
import './HeartModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function HeartModal() {

    const [isShowing, setIsShowing] = useState(false);
    return (

        <div className="modal__heart">
            <div className="modal__overlay"></div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='container'>
                <div className="modal__heart-content">
                    <div className='modal__content'>
                        <button className="modal__succes-icon">
                            <FontAwesomeIcon style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)' }} icon={faCheck} />
                        </button>
                        <div style={{ marginTop: '40px' }} className="modal__notify">
                            <h3 className="modal__notify-product">Shirt in Stretch Cotton</h3>
                            <p>is added to wishlist !</p>
                        </div>
                        <div className="modal__submit">
                            <button onClick={() => {
                                setIsShowing(false)
                            }} className="modal__btn-submit">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeartModal