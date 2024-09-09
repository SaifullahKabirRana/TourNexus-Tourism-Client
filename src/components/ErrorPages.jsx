import { Link } from 'react-router-dom';
import error from '../assets/website-page-found-error.jpg';
const ErrorPages = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='mt-32 md:mt-20 w-[400px] md:w-[600px] xl:w-[800px]' src={error} alt="error-img" />
                <Link to='/'>
                    <button className="btn btn-sm md:btn-md rounded-full text-sm md:text-xl md:px-6 bg-slate-900 text-white font-semibold">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPages;