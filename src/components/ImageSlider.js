
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="image-slider">
            <Slider {...settings}>
                <div>
                    <img src="/images/granta.jpg" alt=" " />
                </div>
                <div>
                    <img src="/images/mers.jpg" alt=" " />
                </div>
                <div>
                    <img src="/images/car3.jpg" alt=" " />
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
