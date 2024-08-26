import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="font-poppins">This is Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> 
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-3xl">News Comming Soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;