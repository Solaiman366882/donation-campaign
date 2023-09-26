import PropTypes from 'prop-types'
import './Banner.css'
const Banner = ({handleSearch}) => {
    return (
        <section className="banner-section">
            <div className='text-center'>
                <h1>I Grow By Helping People In Need</h1>
                <form onSubmit={handleSearch}>
                    <div className="search-area w-[470px] relative">
                        <input type="search" placeholder='Search here....' name="search" id="" />
                        <input type="submit" className="search-btn w-[110px]" value="Search" />
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