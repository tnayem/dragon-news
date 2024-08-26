import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className="mb-5">
                <h2 className="text-3xl mb-2">Login With</h2>
                <button className="btn btn-outline w-full text-xl">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full my-3 text-xl">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div>
                <h2 className="text-3xl">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-2" />
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className="mr-2" />
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-2" />
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className="mb-5">
                <h2 className="text-3xl mb-2">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;