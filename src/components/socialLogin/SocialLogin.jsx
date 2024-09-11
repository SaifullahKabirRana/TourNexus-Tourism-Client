import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
    return (
        <div className="">
        <div className="mt-2">
            <div className="">
                <div className="flex  items-center gap-3">
                    <hr className="w-full" />
                    <p className="font-medium">Or</p>
                    <hr className="w-full" />
                </div>
                <div className="text-center mt-1 md:mt-3">
                    <div  className="btn btn-outline  w-full">
                        <div className="text-2xl">
                            <FcGoogle />
                        </div>
                        <p className="text-[14px] md:text-[16px]">Continue with Google</p>
                    </div>
                    <div  className="btn btn-outline  mt-2 md:mt-4 w-full">
                        <div className="text-2xl">
                            <VscGithub />
                        </div>
                        <p className="text-[14px] md:text-[16px]">Continue with Github</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SocialLogin;