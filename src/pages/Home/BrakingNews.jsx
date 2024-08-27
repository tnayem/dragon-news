import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNews = () => {
    return (
        <div className="flex my-5">
            <button className="btn bg-red-600 text-white">Braking News</button>
            <Marquee pauseOnHover={true}>
                <Link className="font-semibold">In his recent tweet, Indian Prime Minister Narendra Modi stated that while talking to US President, Joe Biden, they spoke about Ukraine, and also discussed the situation in Bangladesh and stressed the need for early restoration of normalcy, and ensuring the safety and security of minorities, especially Hindus, in Bangladesh.</Link>
                <Link>In his recent tweet, Indian Prime Minister Narendra Modi stated that while talking to US President, Joe Biden, they spoke about Ukraine, and also discussed the situation in Bangladesh and stressed the need for early restoration of normalcy, and ensuring the safety and security of minorities, especially Hindus, in Bangladesh.</Link>
                <Link>In his recent tweet, Indian Prime Minister Narendra Modi stated that while talking to US President, Joe Biden, they spoke about Ukraine, and also discussed the situation in Bangladesh and stressed the need for early restoration of normalcy, and ensuring the safety and security of minorities, especially Hindus, in Bangladesh.</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;