import { faEnvelope, faLock, faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.scss'
import { Link } from "react-router-dom";
let isUser = false;
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUser, setIsUser] = useState(false);





    var inputE = document.querySelectorAll('.input')

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
                var smallText = parent.querySelector('small')
                smallText.innerText = 'Input field is require.'
            } else {
                num++;
            };
            if (num == 2) {

                setIsUser(true);
                console.log(isUser);
                window.location.href = `/`;

            }
        });
    };

    const handleEmailClick = (input) => {
        setEmail(input.value);
        var parent = input.parentNode;
        var smallText = parent.querySelector('small')
        smallText.innerText = ''
    }
    const handlePasswordClick = (input) => {
        setPassword(input.value);
        var parent = input.parentNode;
        var smallText = parent.querySelector('small')
        smallText.innerText = ''
    }



    return (

        <form className="login-form validate-form" onSubmit={handleSubmit}>
            <span className="login-form-title">
                Member Login
            </span>
            <div className="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input onChange={(e) => {
                    handleEmailClick(e.target);

                }} className="input" type="text" name="email" placeholder="Email" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <small></small>
            </div>
            <div className="wrap-input validate-input" data-validate="Password is required">
                <input onChange={(e) => {
                    handlePasswordClick(e.target)
                }} className="input" type="password" name="pass" placeholder="Password" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faLock} />
                </span>
                <small></small>
            </div>
            <div onSubmit={handleSubmit} className="container-login-form-btn">
                <button onSubmit={handleSubmit} className="login-form-btn">
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
export { isUser };
