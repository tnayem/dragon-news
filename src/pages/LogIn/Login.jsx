import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleLogIn = e => {
        e.preventDefault()
        console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            const user = result.user 
            if(user.uid){
                navigate(location?.state ? location.state :'/')
            }
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10">Please Login</h2>
            <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                    <p>{`Havn't account please`}<Link to='/register' className="ml-3 label-text-alt link link-hover text-blue-600 font-semibold text-[16px]">Register</Link></p>
                </label>
            </form>
        </div>
    );
};

export default Login;