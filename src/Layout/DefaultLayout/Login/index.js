import { faEnvelope, faLock, faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.scss'
import './action'
import { Link } from "react-router-dom";

function Login() {
    return (

        <form className="login-form validate-form">
            <span className="login-form-title">
                Member Login
            </span>
            <div className="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input" type="text" name="email" placeholder="Email" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faEnvelope} />

                </span>
            </div>
            <div className="wrap-input validate-input" data-validate="Password is required">
                <input className="input" type="password" name="pass" placeholder="Password" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faLock} />
                </span>
            </div>
            <div className="container-login-form-btn">
                <button className="login-form-btn">
                    Login
                </button>
            </div>
            <div className="text-center p-t-12">
                <span className="txt1">
                    Forgot
                </span>
                <a className="txt2" href="#">
                    Username / Password?
                </a>
            </div>
            <div className="text-center p-t-136">
                <a className="txt2" href="#">
                    <Link to='/register'> Create your Account </Link>

                    <FontAwesomeIcon className="m-r-5 m-l-5" icon={faLongArrowRight} />
                </a>

            </div>
        </form>
    )
}

export default Login;