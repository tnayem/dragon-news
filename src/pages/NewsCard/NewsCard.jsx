
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ aNews }) => {
    const { title, image_url,details,_id } = aNews
    return (
        <div className="bg-base-100 p-6 my-6 border">
            <h2 className="card-title pb-5">{title}</h2>
            <div>
            <img
                className="w-full max-h-72"
                src={image_url} />
            {
                details.length>200 ?
                <p>{details?.slice(0,200)} <Link to={`/news/${_id}`} className="text-red-600">Read More...</Link> </p>
                :
                <p>{details}</p>
            }
            </div>
        </div>
    );
};

export default NewsCard;