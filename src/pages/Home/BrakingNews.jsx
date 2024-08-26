import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNews = () => {
    return (
        <div className="flex my-5">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true}>
                <Link>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mx-5">I can be a React component, multiple React components, or just some text.</Link>
                <Link>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;