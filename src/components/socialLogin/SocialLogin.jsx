import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin, githubLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if(result.user) {
                navigate(location?.state ? location.state : '/');
            }
        })
        .catch()
    }
    return (
        <div className="">
            <div className="mt-2">
                <div className="">
                    <div className="flex  items-center gap-3">
                        <hr className="w-full" />
                        <p className="font-medium font-openSans">Or</p>
                        <hr className="w-full" />
                    </div>
                    <div className="text-center mt-1 md:mt-3">
                        <div onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline  w-full">
                            <div className="text-2xl">
                                <FcGoogle />
                            </div>
                            <p className="text-[14px] md:text-[16px] font-quicksand font-bold">Continue with Google</p>
                        </div>
                        <div onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline  mt-2 md:mt-4 w-full">
                            <div className="text-2xl">
                                <VscGithub />
                            </div>
                            <p className="text-[14px] md:text-[16px] font-quicksand font-bold">Continue with Github</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;