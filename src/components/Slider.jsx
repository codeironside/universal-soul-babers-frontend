import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://picsum.photos/200?random=1",
        "https://picsum.photos/200?random=2",
        "https://picsum.photos/200?random=3",
        "https://picsum.photos/200?random=4",
        "https://picsum.photos/200?random=5",
    ]

    return (
        <Slider {...settings} className="max-w-lg mx-auto">
            {images.map((img, i) => (
                // a div card with gradient background and text
                <div key={i} className="!flex gap-5 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white p-5">
                    <img src={img} className="rounded-xl" />

                    <div>
                        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.</p>
                    </div>
                </div>

            ))}
        </Slider>
    );
}