import { faAnchor, faEnvelope, faKey, faLock, faLongArrowLeft, faLongArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.scss'
import { Link } from "react-router-dom";
import { useState } from "react";


function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isUser, setIsUser] = useState(false);


    var inputE = document.querySelectorAll('.input')
    console.log(inputE);

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
            if (num == 3) {

                setIsUser(true);
                console.log(isUser);
                window.location.href = `/login`;

            }
        });
    };

    const handleEmailClick = (input) => {
        setEmail(input.value);
        var parent = input.parentNode;
        var smallText = parent.querySelector('small');
        if (smallText) {
            smallText.innerText = '';
        }
    };

    const handlePasswordClick = (input) => {
        setPassword(input.value);
        var parent = input.parentNode;
        var smallText = parent.querySelector('small');
        if (smallText) {
            smallText.innerText = '';
        }
    };

    const handleFullnameClick = (input) => {
        setFullName(input.value);
        var parent = input.parentNode;
        var smallText = parent.querySelector('small');
        if (smallText) {
            smallText.innerText = '';
        }
    };




    return (

        <form className="login-form validate-form" onSubmit={handleSubmit}>
            <span className="login-form-title">
                Member Register
            </span>

            <div className="wrap-input validate-input" data-validate="Password is required">
                <input onChange={(e) => {
                    handleFullnameClick(e.target);
                }} className="input cf_password" type="text" name="text" placeholder="Fullname" />
                <span className="focus-input"></span>
                <span className="symbol-input">
                    <FontAwesomeIcon icon={faAnchor} />
                </span>
                <small></small>
            </div>
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