import React from 'react'

function CustomPaging({ paths }) {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img className='img-link' src={paths[i]} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

}

export default CustomPaging