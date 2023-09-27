import PropTypes from 'prop-types'
import './Banner.css'
const Banner = ({handleSearch}) => {
    return (
        <section className="banner-section">
            <div className='text-center max-w-screen-xl p-4'>
                <h1 className=' text-2xl md:text-5xl '>I Grow By Helping People In Need</h1>
                <form onSubmit={handleSearch}>
                    <div className="search-area w-[280px] md:w-[470px] relative">
                        <input type="search" placeholder='Search here....' name="search" id="" />
                        <input type="submit" className="search-btn w-[70px] md:w-[110px]" value="Search" />
                    </div>
                </form>
            </div>
        </section>
    );
};

Banner.propTypes = {
    handleSearch:PropTypes.func
}
export default Banner;