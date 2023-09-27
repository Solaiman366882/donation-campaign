import notFoundImage from '../../assets/img/404-banner.webp'

const Error = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default Error;