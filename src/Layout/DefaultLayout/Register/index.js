import { faEnvelope, faKey, faLock, faLongArrowLeft, faLongArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.scss'
import { Link } from "react-router-dom";


function Register() {
    return (

        <form className="login-form validate-form">
            <span className="login-form-title">
                Member Register
            </span>
            <div className="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input" type="text" name="text" placeholder="Username" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faUser} />

                </span>
            </div>
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
            <div className="wrap-input validate-input" data-validate="Password is required">
                <input className="input cf_password" type="password" name="pass" placeholder="Confirm Password" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faKey} />
                </span>
            </div>
            <div className="container-login-form-btn">
                <button className="login-form-btn">
                    Register
                </button>
            </div>

            <div className="text-center p-t-136">
                <a className="txt2" href="#">

                    <Link to='/login'> Already have an account? Log in </Link>
                    <FontAwesomeIcon className="icon" icon={faLongArrowRight} />
                </a>

            </div>
        </form>
    )
}

export default Register;