import RegisterForm from "~/Layout/DefaultLayout/Register";
import Sign from "~/Layout/DefaultLayout/SignLayout";
function Register() {
    return (
        <Sign>
            <RegisterForm />
        </Sign>
    );
}

export default Register;