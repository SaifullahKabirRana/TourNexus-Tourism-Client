import { TbPhotoFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./socialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        // password verification
        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should have at least one upper case character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('password should have at least one lower case character');
            return;
        }

        setRegisterError('');
        //user create
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Register');
                logOut();
                setTimeout(() => {
                    navigate('/login')
                }, 1500);
            })
            .catch(error => {
                setRegisterError(error.code);
                console.log(error.message);
            })

    }
    return (
        <div className="">
            <div className="mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-xl rounded-lg max-w-[340px] md:max-w-[450px] lg:max-w-[600px] mx-auto ">
                <div className="lg:px-10 md:px-8 px-6 ">
                    <h2 className="font-quicksand  text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">Register Your Account</h2>
                    <form onSubmit={handleRegister}>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <FaUser />
                            <input type="text" name="name" className="grow" placeholder="Name" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <MdEmail />
                            <input type="email" name="email" className="grow" placeholder="Email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <TbPhotoFilled />
                            <input type="text" name="photo" placeholder="Photo URL" className="grow " />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-1">
                            <RiLockPasswordFill />
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="grow" required />
                            <span className="text-xl md:text-2xl " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEyeClosed /> : <VscEye />}</span>
                        </label>
                        <div className="ml-2 mb-4">
                            {
                                registerError && <p className="text-[12px] md:text-[15px] text-red-600">{registerError}</p>
                            }
                        </div>
                        <div>
                            <input className="btn w-full bg-[#56b63e] text-white font-quicksand font-semibold text-base md:text-lg lg:text-xl" type="submit" value="Register" />
                        </div>
                        <p className="mt-2 md:mt-3 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold font-openSans">Already have an account? <Link to='/login' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Login</Link></p>
                        <div className="mb-1 md:mb-3">
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer className=''
                position="top-center"
                autoClose={2000}
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

export default Register;