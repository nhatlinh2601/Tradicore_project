import imageLogin from '~/assets/images/img-login/login.png'
import './Sign.scss'



function Sign({ children }) {
    return (
        <div className="limiter">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-pic js-tilt" data-tilt>
                        <img src={imageLogin} alt="IMG" type="image/avif" />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Sign;