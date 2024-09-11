import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "./socialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // login user
        setLoginError('');
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Login');
            })
            .catch(error => {
                setLoginError(error.code);
            })

    }
    return (
        <div className="">
            <div className="mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-xl rounded-lg max-w-[340px] md:max-w-[450px] lg:max-w-[600px] mx-auto ">
                <div className="lg:px-10 md:px-8 px-6 ">
                    <h2 className="font-quicksand  text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">Login Your Account</h2>
                    <form onSubmit={handleLogin}>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <MdEmail />
                            <input type="email" name="email" className="grow" placeholder="Email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-1">
                            <RiLockPasswordFill />
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="grow" required />
                            <span className="text-xl md:text-2xl " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEyeClosed /> : <VscEye />}</span>
                        </label>
                        <div className="ml-2 mb-4">
                            {
                                loginError && <p className="text-[12px] md:text-[15px] text-red-600">{loginError}</p>
                            }
                        </div>
                        <div>
                            <input className="btn w-full bg-[#56b63e] text-white font-quicksand font-semibold text-base md:text-lg lg:text-xl" type="submit" value="Login" />
                        </div>
                        <p className="mt-2 md:mt-3 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold font-openSans">Don’t have an account? <Link to='/register' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Register</Link></p>
                        <div className="mb-1 md:mb-3">
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer className=''
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            >
            </ToastContainer>
        </div>
    );
};

export default Login;